// next.config.js
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  // Vos autres configurations Next.js
});

// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/i18n';
 
export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};