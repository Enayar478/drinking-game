// src/components/ui/LanguageSelector.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative">
        <select
          value={locale}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="appearance-none bg-slate-800 text-white rounded-lg px-4 py-2 pr-8 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}