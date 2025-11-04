import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'fr'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) {
    locale = 'fr';
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.ts`)).default
  };
});
