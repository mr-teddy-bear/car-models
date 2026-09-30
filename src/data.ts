export type CarBrand = {
  id: string
  name: string
  speech: string
  country: string
  color: string
  logo: string
  images: string[]
}

export const brands: CarBrand[] = [
  {
    id: 'audi', name: 'Ауди', speech: 'Ауди', country: 'Германия', color: '#ef4d4d', logo: 'Audi-Logo 2016.svg',
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
    id: 'bmw', name: 'БМВ', speech: 'Бэ эм вэ', country: 'Германия', color: '#3682c4', logo: 'BMW logo (gray).svg',
    images: [
      'Festival automobile international 2011 - BMW 650i - 01.jpg',
      'BMW 1800, Front (2018-06-03 Sp).JPG',
      '2-BMW Active Tourer, GIMS 2018 front (1X7A1875).jpg',
      'BMW M4 in der BMW Welt.jpg',
      '2020 BMW 4.jpg',
      'BMW G30-LCI kidney grilles 2023.jpg',
    ],
  },
  {
    id: 'hyundai', name: 'Хендай', speech: 'Хендай', country: 'Южная Корея', color: '#2772b8', logo: 'Hyundai Motor Company logo.svg',
    images: [
      '2019 Hyundai Santa Fe front 1.21.19.jpg',
      '1989 Hyundai Excel GL Front Left.jpg',
      '2020 Hyundai Sonata SEL (Quartz White), front right.jpg',
      '20200618 Hyundai Palisade Front Side.png',
      'Hyundai Ioniq 5 IAA 2021 1X7A0189.jpg',
      'Hyundai-Kona-Rijkswaterstaat-front-right.jpg',
    ],
  },
  {
    id: 'mazda', name: 'Мазда', speech: 'Мазда', country: 'Япония', color: '#d84c55', logo: 'Mazda logo.svg',
    images: [
      'Mazda RX-8 on freeway.jpg',
      'Mazda Familia first generation 1966 at the Mazda-Museum Augsburg - Front one quarter view.jpg',
      '2001 Hainan-Mazda 323 (front).jpg',
      'Mazda CX-80 PHEV DSC 6068.jpg',
      'Mazda Cosmo Sport (front three-quarter view) at Mazda Museum.jpg',
      'Mazda Cosmo AP (front three-quarter view) at Mazda Museum.jpg',
    ],
  },
  {
    id: 'mercedes', name: 'Мерседес', speech: 'Мерседес', country: 'Германия', color: '#8a949c', logo: 'Mercedes-Benz Logo 2010.svg',
    images: [
      'AMG Mercedes-Benz C204 (DTM).jpg',
      'Mercedes-Benz 230 G, Techno-Classica 2018, Essen (IMG 9831).jpg',
      'Mercedes-Benz H 243 1X7A0361.jpg',
      'Mercedes-Benz X254 1X7A6345.jpg',
      'Mercedes-Benz W177 (2022) 1X7A6957.jpg',
      'Mercedes-Benz W214 1X7A0885.jpg',
    ],
  },
  {
    id: 'mitsubishi', name: 'Мицубиси', speech: 'Мицубиси', country: 'Япония', color: '#df4248', logo: 'Mitsubishi motors new logo.svg',
    images: [
      'Mitsubishi Engelberg Tourer Genf 2019 1Y7A5813.jpg',
      '2008 Changfeng-Mitsubishi Pajero iO, front 8.8.18.jpg',
      'Mitsubishi ASX (2nd generation) 1X7A7067.jpg',
      'Mitsubishi Sapporo (front).jpg',
      '2004 Mitsubishi Outlander LS, front right, 09-24-2023.jpg',
      '2014 Mitsubishi Outlander SE, front left, 09-28-2024.jpg',
    ],
  },
  {
    id: 'nissan', name: 'Ниссан', speech: 'Ниссан', country: 'Япония', color: '#c8494f', logo: 'Nissan brand wordmark.svg',
    images: [
      'Nissan Qashqai, Bj. 2008 - Front (2008-09-21 ret).jpg',
      'Nissan IMk Concept, 2021, front, Nissan Gallery HQ.jpg',
      '2022 Nissan Primastar Automesse Ludwigsburg 2022 1X7A5926.jpg',
      'Nissan Ariya Automesse Ludwigsburg 2022 1X7A5877.jpg',
      '2022 Dongfeng-Nissan Ariya (front).jpg',
      'Nissan S15, BAS 24, Brussels (P1170420-RR).jpg',
    ],
  },
  {
    id: 'renault', name: 'Рено', speech: 'Рено', country: 'Франция', color: '#f1b927', logo: 'Renault Logo 1972.svg',
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
    id: 'skoda', name: 'Шкода', speech: 'Шкода', country: 'Чехия', color: '#48a56a', logo: 'Skoda-Auto-Logo-2011-present.svg',
    images: [
      '2018 Skoda Kodiaq Scout TDi SCR 4X4 2.0 Front.jpg',
      '2019 Skoda Scala SE TDi 1.6 Front.jpg',
      'Skoda Scala Edition S IMG 5986.jpg',
      '2018 SAIC-Škoda Rapid sedan (front).jpg',
      'White Škoda Kodiaq front view.jpg',
      'White Škoda Kodiaq three-quarter front view.jpg',
    ],
  },
  {
    id: 'toyota', name: 'Тойота', speech: 'Тойота', country: 'Япония', color: '#df4747', logo: 'Toyota EU.svg',
    images: [
      '2022 Toyota Corolla Cross L FWD, Front Left, 11-21-2021.jpg',
      'DSC00769 Toyota Yaris, Carabinieri, Front Left.jpg',
      'Toyopet Crown RS (1955) front-right Toyota Automobile Museum.jpg',
      'Toyopet Crown RS (1955) front Toyota Automobile Museum.jpg',
      'Toyota 2000GT MF10 (1968) front-left Toyota Automobile Museum.jpg',
      'Toyota Camry IX front quarter, Guangzhou, 202311191645.jpg',
    ],
  },
  {
    id: 'lada', name: 'Лада', speech: 'Лада', country: 'Россия', color: '#4b8de8', logo: 'Lada company logo image.png',
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
    id: 'volkswagen', name: 'Фольксваген', speech: 'Фольксваген', country: 'Германия', color: '#2378c7', logo: 'Volkswagen logo 2019.svg',
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
    id: 'bentley', name: 'Бентли', speech: 'Бентли', country: 'Великобритания', color: '#397969', logo: 'Bentley Logo.jpg',
    images: [
      'Bentley Arnage (front).jpg',
      'Bentley Supercharged 4,5 l Bj 1931 - 1989.jpg',
      'Bentley Bentayga 2015 - front.jpg',
      'Bentley Continental GT, IAA 2017, Frankfurt (1Y7A2192).jpg',
      'Bentley 8 ltr. Tourer, Bj. 1931 (2008-06-28 Sp).jpg',
      'Bentley Flying Spur Hybrid (2019) 1X7A0376.jpg',
    ],
  },
  {
    id: 'chevrolet', name: 'Шевроле', speech: 'Шевроле', country: 'США', color: '#d6aa34', logo: 'Chevrolet simple logo.svg',
    images: [
      'Chevrolet-Cobalt-Coupe.JPG',
      '2006 Chevrolet Cobalt LT, Front Right, 04-06-2020.jpg',
      '2010 Chevrolet Cobalt 2LT, Front Left, 05-28-2020.jpg',
      '2006 Chevrolet Cobalt LS, Front Left, 09-15-2020.jpg',
      '2009 Chevrolet Cobalt LT, Front Left, 05-15-2021.jpg',
      '2019 Chevrolet Cobalt 1.8 LTZ facelift (front).jpg',
    ],
  },
  {
    id: 'chrysler', name: 'Крайслер', speech: 'Крайслер', country: 'США', color: '#5d86a0', logo: 'Chrysler brand logo 2026.svg',
    images: [
      '1961 Chrysler New Yorker, front view (low).jpg',
      'Chrysler 300M Front.jpg',
      '1997 Chrysler LHS, front right, 11-01-2022.jpg',
      '1991 Chrysler Imperial, front left, 11-08-2022.jpg',
      '2011 Chrysler 300, front right, 07-19-2023.jpg',
      '2004 Chrysler Crossfire coupe, front right, 08-06-2023.jpg',
    ],
  },
  {
    id: 'citroen', name: 'Ситроен', speech: 'Ситроен', country: 'Франция', color: '#e95d60', logo: 'Citroen 2022.svg',
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
    id: 'ferrari', name: 'Феррари', speech: 'Феррари', country: 'Италия', color: '#e72b35', logo: 'Ferrari wordmark.svg',
    images: [
      'Ferrari 365 GTB 4 Daytona, Bj. 1970 (2007-07-22).jpg',
      'Ferrari 365 GTB 4 Daytona Coupe , Grand Basel 2018 (Ank Kumar) 02.jpg',
      'Ferrari 365 GTB 4 Daytona Coupe , Grand Basel 2018 (Ank Kumar) 03.jpg',
      '1969 Ferrari 365 GTB4 Daytona.jpg',
      'Ferrari 365 GTB 4 (1972) (52863099504).jpg',
      'Ferrari 365 GTB 4 at the 2025 Shannons Adelaide Rally (028A4555).jpg',
    ],
  },
  {
    id: 'ford', name: 'Форд', speech: 'Форд', country: 'США', color: '#3475bd', logo: 'Ford logo flat.svg',
    images: [
      'Ford P1 (Front 2011-09-24 Sp).JPG',
      'Ford V8, Baujahr 1937, Deutsch-Karosserie (2014-09-13 Sp).jpg',
      'Ford OSI Classic-Days 2022 IMG 7197.jpg',
      'Ford Mustang VII Convertible Autofrühling Ulm IMG 9339.jpg',
      'Ford Fiesta 2018 S Plus 1.6 in Montevideo (front).jpg',
      'Ford Kuga in Vaduz front.jpg',
    ],
  },
  {
    id: 'gaz', name: 'ГАЗ', speech: 'Газ', country: 'Россия', color: '#557b9b', logo: 'Emblem GAZ an einem Wolga cropped.JPG',
    images: [
      'GAZ-21 "Volga" (front view).jpg',
      'Gaz-31029-front-part.jpg',
      'GAZ-24 (1st generation) "Volga" (front view).jpg',
      'GAZ-24 (2nd generation) "Volga" (front view).jpg',
      'GAZ-21 "Volga" (modifikace pro veřejné bezpečnosti), Praha 2008 (front view).jpg',
      'GAZ-21 (2nd series "i") "Volga" (front view).jpg',
    ],
  },
  {
    id: 'honda', name: 'Хонда', speech: 'Хонда', country: 'Япония', color: '#d8474d', logo: 'Honda logo.svg',
    images: [
      'Honda Accord 1993 Finland.JPG',
      'Honda S 800 Front (2011-06-19) b.jpg',
      'Honda NSX Concept-GT front 2014 Honda Welcome Plaza.jpg',
      'Honda, GIMS 2018, Le Grand-Saconnex (1X7A1311).jpg',
      '2013 Dongfeng-Honda Elysion (front).jpg',
      'GAC-Honda Integra front quarter.jpg',
    ],
  },
  {
    id: 'infiniti', name: 'Инфинити', speech: 'Инфинити', country: 'Япония', color: '#766f72', logo: 'Infiniti Front Emblem - 2013 Infiniti G37 IPL Convertible (9201465409).jpg',
    images: [
      "'14 Infiniti Q70 -- Front (MIAS '14).jpg",
      "'14 Infiniti QX80 -- Front (MIAS '14).jpg",
      'Infiniti Front Emblem - 2013 Infiniti G37 IPL Convertible (9201465409).jpg',
      '2017 Infiniti QX80 5.6L front 6.24.18.jpg',
      'Infiniti QX60 (L51), 2021, front.jpg',
      '2019 Dongfeng-Infiniti QX50 (front).jpg',
    ],
  },
  {
    id: 'lexus', name: 'Лексус', speech: 'Лексус', country: 'Япония', color: '#7d6d5d', logo: 'Lexus Logo.svg',
    images: [
      'Lexus LC Convertible Concept Genf 2019 1Y7A5653.jpg',
      'Lexus SC400 front.jpg',
      'Lexus RX 450h+ PROTOTYPE (AALH16) front.jpg',
      'Lexus RX 450h+ (AALH16) 1X7A7074.jpg',
      'Lexus Sport Concept front left.jpg',
      'Lexus Sport Concept front right.jpg',
    ],
  },
  {
    id: 'mini', name: 'Мини Купер', speech: 'Мини Купер', country: 'Великобритания', color: '#4c826f', logo: 'MINI logo.svg',
    images: [
      'Dülmen, Dernekamp, Mini Hatch Cooper -- 2018 -- 1545-51.jpg',
      'Dülmen, Kirchspiel, Börnste, BMW Mini -- 2019 -- 7207-13.jpg',
      'Mini Cooper 40th, Eckernförde (P1100630).jpg',
      'Mini Hatch (J01) Cooper S IAA 2023 1X7A0724.jpg',
      'Mini Clubman (F54) John Cooper Works IMG 9715.jpg',
      'Mini Countryman (U25) John Cooper Works IMG 0034.jpg',
    ],
  },
  {
    id: 'peugeot', name: 'Пежо', speech: 'Пежо', country: 'Франция', color: '#53769d', logo: 'Peugeot logo 1991-1998.png',
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
    id: 'volvo', name: 'Вольво', speech: 'Вольво', country: 'Швеция', color: '#4d7899', logo: 'Volvo-Iron-Mark-Black.svg',
    images: [
      '1966 Volvo 122 two-door in Black, front right.jpg',
      '2009-04-18 Volvo in front of Baldwin Auditorium.jpg',
      'Volvo PV 544, Front (2017-07-02 Sp).JPG',
      '1990 Volvo 940 saloon (front).jpg',
      '1995 Volvo 850 2.5 (Front).jpg',
      '2000 Volvo V70, front right, 05-20-2024.jpg',
    ],
  },
  {
    id: 'tesla', name: 'Тесла', speech: 'Тесла', country: 'США', color: '#d94545', logo: 'Tesla Motors.svg',
    images: [
      'Tesla front.jpg',
      '20180630 Tesla Model S 70D 2015 midnight blue left front.jpg',
      '2021 Tesla Model S P2 Long Range front right view.jpg',
      'Tesla Model 3 (2023) IMG 9488 (cropped).jpg',
      'Tesla Model X 100D 1X7A6736.jpg',
      'Tesla X Electrodrive (front view).jpg',
    ],
  },
]

export const commonsImage = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=1400`

export const commonsPage = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll('%20', '_')}`
