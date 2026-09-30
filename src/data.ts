export type CarBrand = {
  id: string
  name: string
  speech: string
  country: string
  color: string
  images: string[]
}

export const brands: CarBrand[] = [
  {
    id: 'audi', name: 'Ауди', speech: 'Ауди', country: 'Германия', color: '#ef4d4d',
    images: [
      '2018 Audi R8 Coupe V10 plus Front.jpg',
      'Audi A3 SportBack 2017 (front right side).jpg',
      'Audi A6 Avant e-tron DSC 7425.jpg',
      'Audi R8 LMP, Le Mans 2000, Front (museum mobile 2013-09-03).JPG',
      'Audi q7 front white.jpg',
      'Audi logo black on Q8 S-Line front.jpeg',
    ],
  },
  {
    id: 'lada', name: 'Лада', speech: 'Лада', country: 'Россия', color: '#4b8de8',
    images: [
      '1986 Lada Niva in Beige, Front Right, 04-03-2022.jpg',
      'Lada 1600, Košice (1).jpg',
      'Lada 4x4, Almaty (P1180249).jpg',
      'Lada XRay Cross concept on MIAS 2016 - front view.jpg',
      'Lada automobile in Murmansk.JPG',
      'Lada in filling station.jpg',
    ],
  },
  {
    id: 'tesla', name: 'Тесла', speech: 'Тесла', country: 'США', color: '#d94545',
    images: [
      'Tesla front.jpg',
      '20180630 Tesla Model S 70D 2015 midnight blue left front.jpg',
      '2021 Tesla Model S P2 Long Range front right view.jpg',
      'Tesla Model 3 (2023) IMG 9488 (cropped).jpg',
      'Tesla Model X 100D 1X7A6736.jpg',
      'Tesla X Electrodrive (front view).jpg',
    ],
  },
  {
    id: 'volkswagen', name: 'Фольксваген', speech: 'Фольксваген', country: 'Германия', color: '#2378c7',
    images: [
      '1957 Volkswagen Beetle, export model, in front of Porta Nigra in Trier 2023-05-01.jpg',
      '2006 SAIC-Volkswagen Polo Jinqu (front).jpg',
      '2023 FAW-Volkswagen Tayron 300TSI (facelift, front).jpg',
      'Red Volkswagen Beetle three-quarter front view.jpg',
      'Volkswagen ID.7 Tourer IMG 4193.jpg',
      'Volkswagen press conference, IAA 2017, Frankfurt (1Y7A2075).jpg',
    ],
  },
  {
    id: 'renault', name: 'Рено', speech: 'Рено', country: 'Франция', color: '#f1b927',
    images: [
      '2015 Renault Clio Expression DCi Grandtour (Front ).png',
      'Renault 6 front 20080918.jpg',
      'Renault Austral 1X7A6245.jpg',
      'Renault Espace VI IMG 9423.jpg',
      'Renault Floride S, Bj. 1963.jpg',
      'Renault Floride S (2009-10-13).jpg',
    ],
  },
  {
    id: 'peugeot', name: 'Пежо', speech: 'Пежо', country: 'Франция', color: '#53769d',
    images: [
      '1959 Peugeot 403 1.5 Front.jpg',
      '2022 - Peugeot 308 III (C) - 157.jpg',
      '2022 Dongfeng-Peugeot 408 (facelift, front).jpg',
      'Pepe Lopez Peugeot 208 T16 (3).jpg',
      'Peugeot 203, Cabriolimousine, Bj. 1951 (6694 r2).jpg',
      'Peugeot 5008 (front), 10 June 2024.jpg',
    ],
  },
  {
    id: 'citroen', name: 'Ситроен', speech: 'Ситроен', country: 'Франция', color: '#e95d60',
    images: [
      '12-03-01-autostadtr-by-RalfR-25 6 7 8 9 fused edit.jpg',
      '1977 Citroën automobile rouge left front view.jpg',
      'Citroen DS21 Majesty Chapron, TC 24, Essen (TCE43423).jpg',
      'Citroen Ds100.jpg',
      'Citroën 2 CV Charleston (2015-08-29 3174 b).jpg',
      'Cream Citroën Burton three-quarter front view.png',
    ],
  },
  {
    id: 'opel', name: 'Опель', speech: 'Опель', country: 'Германия', color: '#e1b62f',
    images: [
      'Billerbeck, Opel Wiens, Opel Adam -- 2017 -- 0661.jpg',
      'Billerbeck, Opel Wiens, Opel Adam -- 2017 -- 0666.jpg',
      'Opel Olympia Rekord P1 Kombi 2012-09-01 14-29-57.JPG',
      'Opel Rekord P2 Front (2012-09-28 Sp).JPG',
      'Opel Rocks Extreme in Munich (front).jpg',
      'White Opel Karl front view.jpg',
    ],
  },
  {
    id: 'toyota', name: 'Тойота', speech: 'Тойота', country: 'Япония', color: '#df4747',
    images: [
      '2022 Toyota Corolla Cross L FWD, Front Left, 11-21-2021.jpg',
      'DSC00769 Toyota Yaris, Carabinieri, Front Left.jpg',
      'Toyopet Crown RS (1955) front-right Toyota Automobile Museum.jpg',
      'Toyopet Crown RS (1955) front Toyota Automobile Museum.jpg',
      'Toyota 2000GT MF10 (1968) front-left Toyota Automobile Museum.jpg',
      'Toyota Camry IX front quarter, Guangzhou, 202311191645.jpg',
    ],
  },
]

export const commonsImage = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=1400`

export const commonsPage = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll('%20', '_')}`
