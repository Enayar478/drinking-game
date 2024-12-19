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