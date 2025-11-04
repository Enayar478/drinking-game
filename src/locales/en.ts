// src/locales/en.ts
export default {
  common: {
    appName: 'CULTURESIPS',
    tagline: 'Test your knowledge, take a sip!',
    loading: 'Loading...',
  },

  countries: {
    // East Asia
    JP: { name: "Japan" },
    KR: { name: "South Korea" },
    CN: { name: "China" },
    TW: { name: "Taiwan" },
    MN: { name: "Mongolia" },

    // Southeast Asia
    TH: { name: "Thailand" },
    VN: { name: "Vietnam" },
    PH: { name: "Philippines" },
    MY: { name: "Malaysia" },
    ID: { name: "Indonesia" },

    // Northern Europe
    SE: { name: "Sweden" },
    NO: { name: "Norway" },
    DK: { name: "Denmark" },
    FI: { name: "Finland" },
    IS: { name: "Iceland" },

    // Latin America
    CO: { name: "Colombia" },
    VE: { name: "Venezuela" },
    PE: { name: "Peru" },
    EC: { name: "Ecuador" },
    CL: { name: "Chile" },

    // Africa
    SN: { name: "Senegal" },
    ML: { name: "Mali" },
    NG: { name: "Nigeria" },
    CM: { name: "Cameroon" },
    CI: { name: "Ivory Coast" },
  },

  countrySelection: {
    title: 'Choose your challenge',
    subtitle: 'Select 2 countries to start',
    selectedCountries: 'Selected countries:',
    startButton: {
      ready: 'Start the game!',
      notReady: 'Select 2 countries',
    },
  },

  game: {
    score: 'Score',
    bestScore: 'Best score',
    sips: 'sips',
    loadingImage: 'Loading image...',
    newImageLoading: 'New image loading...',
  },

  gameOver: {
    title: 'GAME OVER!',
    subtitle: 'You must drink',
    sips: 'sips',
    buttons: {
      continue: 'Continue with same countries',
      changeCountries: 'Change countries',
    },
  },
};
