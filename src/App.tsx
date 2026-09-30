import { useEffect, useMemo, useRef, useState } from 'react'
import { brands, commonsImage, commonsPage, type CarBrand } from './data'

type Answer = 'known' | 'learning'
type Screen = 'welcome' | 'game' | 'result'

type Round = {
  brand: CarBrand
  imageIndex: number
}

const shuffle = <T,>(items: T[]) => {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const buildDeck = (): Round[] =>
  shuffle(brands).map((brand) => ({
    brand,
    imageIndex: Math.floor(Math.random() * brand.images.length),
  }))

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Zm11.5-.7a5.2 5.2 0 0 1 0 7.4M18 5.8a8.8 8.8 0 0 1 0 12.4" />
    </svg>
  )
}

function CarMark() {
  return (
    <svg className="car-mark" viewBox="0 0 62 38" aria-hidden="true">
      <path d="m11 24 4-11c.6-1.7 2.1-2.8 3.9-2.8h24.2c1.8 0 3.3 1.1 3.9 2.8l4 11" />
      <path d="M6 24h50v8H6z" />
      <circle cx="15" cy="32" r="4" /><circle cx="47" cy="32" r="4" />
    </svg>
  )
}

function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [deck, setDeck] = useState<Round[]>(buildDeck)
  const [round, setRound] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [choice, setChoice] = useState<Answer | null>(null)
  const [failedFile, setFailedFile] = useState<string | null>(null)
  const [soundOn, setSoundOn] = useState(true)
  const timerRef = useRef<number | null>(null)

  const current = deck[round]
  const knownCount = Object.values(answers).filter((answer) => answer === 'known').length
  const learningBrands = useMemo(
    () => deck.filter(({ brand }) => answers[brand.id] === 'learning'),
    [answers, deck],
  )

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    window.speechSynthesis?.cancel()
  }, [])

  const speak = (brand: CarBrand) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(brand.speech)
    utterance.lang = 'ru-RU'
    utterance.rate = 0.78
    utterance.pitch = 1.12
    window.speechSynthesis.speak(utterance)
  }

  const start = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setDeck(buildDeck())
    setRound(0)
    setAnswers({})
    setChoice(null)
    setScreen('game')
  }

  const answer = (value: Answer) => {
    if (choice || !current) return
    setChoice(value)
    setAnswers((previous) => ({ ...previous, [current.brand.id]: value }))
    if (soundOn) speak(current.brand)

    timerRef.current = window.setTimeout(() => {
      setChoice(null)
      if (round === deck.length - 1) {
        setScreen('result')
      } else {
        setRound((value) => value + 1)
      }
    }, 760)
  }

  const repeatLearning = () => {
    if (!learningBrands.length) return
    setDeck(shuffle(learningBrands).map(({ brand, imageIndex }) => ({
      brand,
      imageIndex: (imageIndex + 1) % brand.images.length,
    })))
    setRound(0)
    setAnswers({})
    setChoice(null)
    setScreen('game')
  }

  if (screen === 'welcome') {
    return (
      <main className="app welcome">
        <div className="decor decor-one" /><div className="decor decor-two" />
        <section className="welcome-card">
          <div className="mini-label"><span>●</span> МИНИ-ИГРА</div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun" /><div className="road-line line-one" /><div className="road-line line-two" />
            <div className="hero-car"><CarMark /></div>
          </div>
          <h1>Угадай<br /><em>машину!</em></h1>
          <p>Смотри на автомобиль, слушай название<br />и отмечай марки, которые уже знаешь.</p>
          <button className="start-button" onClick={start}>Поехали! <span>→</span></button>
          <div className="welcome-meta">
            <span><b>{brands.length}</b> марок</span><i />
            <span><b>{brands.reduce((sum, brand) => sum + brand.images.length, 0)}</b> фото</span><i />
            <span>без рекламы</span>
          </div>
        </section>
      </main>
    )
  }

  if (screen === 'result') {
    const allKnown = knownCount === deck.length
    return (
      <main className="app result-screen">
        <section className="result-card">
          <div className="result-badge">{allKnown ? '🏆' : '🏁'}</div>
          <p className="eyebrow">ЗАЕЗД ОКОНЧЕН</p>
          <h1>{allKnown ? 'Вот это знаток!' : 'Отличная поездка!'}</h1>
          <p className="result-copy">Ты знаешь <strong>{knownCount} из {deck.length}</strong> марок. Ещё немного практики — и узнаешь все!</p>
          <div className="score-ring" style={{ '--score': `${(knownCount / deck.length) * 360}deg` } as React.CSSProperties}>
            <div><b>{knownCount}</b><span>знаю</span></div>
          </div>
          <div className="result-actions">
            {learningBrands.length > 0 && <button className="repeat-button" onClick={repeatLearning}>Повторить сложные</button>}
            <button className="again-button" onClick={start}>Играть ещё раз</button>
          </div>
        </section>
      </main>
    )
  }

  const fileName = current.brand.images[current.imageIndex]
  const progress = ((round + 1) / deck.length) * 100

  return (
    <main className="app game-screen">
      <header className="topbar">
        <button className="brand-home" onClick={() => setScreen('welcome')} aria-label="На главную">
          <span className="brand-icon"><CarMark /></span>
          <span>АВТО<em>ЗНАЙКА</em></span>
        </button>
        <div className="progress-wrap">
          <div className="progress-label"><span>ТВОЙ ЗАЕЗД</span><b>{round + 1} / {deck.length}</b></div>
          <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
        </div>
        <button className={`sound-toggle ${soundOn ? 'active' : ''}`} onClick={() => setSoundOn((value) => !value)} aria-label="Включить или выключить звук">
          <SpeakerIcon />
        </button>
      </header>

      <section className={`game-card ${choice ? `choice-${choice}` : ''}`}>
        <div className="photo-wrap">
          {failedFile !== fileName ? (
            <img src={commonsImage(fileName)} alt={`Автомобиль марки ${current.brand.name}`} onError={() => setFailedFile(fileName)} />
          ) : (
            <div className="image-fallback" style={{ background: current.brand.color }}><CarMark /><span>{current.brand.name}</span></div>
          )}
          <div className="photo-shade" />
          <span className="country-chip">{current.brand.country}</span>
          <a className="credit" href={commonsPage(fileName)} target="_blank" rel="noreferrer">Wikimedia Commons ↗</a>
        </div>

        <div className="brand-info">
          <div>
            <p className="eyebrow">ЭТО МАРКА</p>
            <h1>{current.brand.name}</h1>
          </div>
          <button className="speak-button" onClick={() => speak(current.brand)} aria-label={`Послушать: ${current.brand.name}`}>
            <SpeakerIcon /><span>Послушать</span>
          </button>
        </div>

        <div className="question">Ты знаешь эту марку?</div>
        <div className="answer-buttons">
          <button className="answer no" onClick={() => answer('learning')} disabled={Boolean(choice)}>
            <span className="answer-icon">×</span><span><b>Не знаю</b><small>Буду учить</small></span>
          </button>
          <button className="answer yes" onClick={() => answer('known')} disabled={Boolean(choice)}>
            <span className="answer-icon">✓</span><span><b>Знаю!</b><small>Следующая</small></span>
          </button>
        </div>
        {choice && <div className="choice-message">{choice === 'known' ? 'Супер! Так держать!' : 'Запомним вместе!'}</div>}
      </section>
    </main>
  )
}

export default App
