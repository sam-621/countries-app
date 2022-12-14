export interface ICountry {
  flags: {
    png: string
    svg: string
  }
  name: {
    common: string
    official: string
    nativeName: { ara: [object] }
  }
  tld: string[]
  cca3: string
  currencies: { KWD: { name: string; symbol: string } }
  capital: string[]
  region: string
  subregion: string
  languages: { ara: string }
  borders: string[]
  population: number
  continents: string[]
}
