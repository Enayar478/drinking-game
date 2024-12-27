// src/locales/fr.ts
export const fr = {
    common: {
      appName: 'CULTURESIPS',
      tagline: 'Testez vos connaissances, prenez une gorgée !',
      loading: 'Chargement...',
    },
    
    countries: {
      // Asie de l'Est
      JP: { name: "Japon" },
      KR: { name: "Corée du Sud" },
      CN: { name: "Chine" },
      TW: { name: "Taiwan" },
      MN: { name: "Mongolie" },
      
      // Asie du Sud-Est
      TH: { name: "Thaïlande" },
      VN: { name: "Vietnam" },
      PH: { name: "Philippines" },
      MY: { name: "Malaisie" },
      ID: { name: "Indonésie" },
      
      // Europe du Nord
      SE: { name: "Suède" },
      NO: { name: "Norvège" },
      DK: { name: "Danemark" },
      FI: { name: "Finlande" },
      IS: { name: "Islande" },
      
      // Amérique Latine
      CO: { name: "Colombie" },
      VE: { name: "Venezuela" },
      PE: { name: "Pérou" },
      EC: { name: "Équateur" },
      CL: { name: "Chili" },
      
      // Afrique
      SN: { name: "Sénégal" },
      ML: { name: "Mali" },
      NG: { name: "Nigeria" },
      CM: { name: "Cameroun" },
      CI: { name: "Côte d'Ivoire" },
    },
  
    countrySelection: {
      title: 'Choisissez votre défi',
      subtitle: 'Sélectionnez 2 pays pour commencer',
      selectedCountries: 'Pays sélectionnés :',
      startButton: {
        ready: 'Commencer la partie !',
        notReady: 'Sélectionnez 2 pays',
      },
    },
  
    game: {
      score: 'Score',
      bestScore: 'Meilleur score',
      sips: 'gorgées',
      loadingImage: 'Chargement de l\'image...',
      newImageLoading: 'Nouvelle image en cours...',
    },
  
    gameOver: {
      title: 'PERDU !',
      subtitle: 'Tu dois boire',
      sips: 'gorgées',
      buttons: {
        continue: 'Continuer avec les mêmes pays',
        changeCountries: 'Changer de pays',
      },
    },
  };
  
  // src/locales/en.ts
  export const en = {
    common: {
      appName: 'CULTURESIPS',
      tagline: 'Test your knowledge, take a sip!',
      loading: 'Loading...',
    },
    // ... (mêmes clés que fr mais en anglais)
  };