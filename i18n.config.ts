export default defineI18nConfig(() => ({
    legacy: false,
    strategy: 'prefix_except_default',
    locales: ['en', 'fr', 'da', 'de', 'nl'],
    defaultLocale: 'en',
    messages: {
      en: {
        welcome: 'Welcome'
      },
      fr: {
        welcome: 'Bienvenue'
      },
      da: {
        welcome: 'Velkomst'
      },
      de: {
        welcome: 'Willkommen'
      },
      nl: {
        welcome: 'Welkom'
      }
    }
  }))
  