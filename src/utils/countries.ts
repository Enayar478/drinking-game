// src/utils/countries.ts
export const COUNTRIES = {
    JP: {
      name: "Japan",
      flag: "🇯🇵",
      code: "JP"
    },
    CN: {
      name: "China",
      flag: "🇨🇳",
      code: "CN"
    },
    KR: {
      name: "Korea",
      flag: "🇰🇷",
      code: "KR"
    },
    TH: {
      name: "Thailand",
      flag: "🇹🇭",
      code: "TH"
    }
  } as const
  
    export type CountryCode = keyof typeof COUNTRIES
    export type Country = typeof COUNTRIES[CountryCode]
  
  // Utility functions
    export function getCountry(code: CountryCode): Country {
    return COUNTRIES[code]
  }

  // Dans countries.ts
    export function getCountryEntries(): [CountryCode, typeof COUNTRIES[CountryCode]][] {
    return Object.entries(COUNTRIES) as [CountryCode, typeof COUNTRIES[CountryCode]][];
  }
  
    export function getCountryFlag(code: CountryCode): string {
    return COUNTRIES[code].flag;
  }
  
    export function isValidCountryCode(code: string): code is CountryCode {
    return code in COUNTRIES
  }
  
  // If you need an array of all country codes
    export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[]
  
  // If you need an array of all countries
    export const ALL_COUNTRIES = Object.values(COUNTRIES)