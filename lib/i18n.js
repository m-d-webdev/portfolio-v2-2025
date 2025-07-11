"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { locales, getLocaleFromPathname } from './server-i18n';

const nextRouteLanguageDetector = {
    name: 'nextRoute',
    lookup() {
        if (typeof window !== 'undefined') {
            return getLocaleFromPathname(window.location.pathname);
        }
        return 'en';
    },
};

if (!i18n.isInitialized) {
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            debug: process.env.NODE_ENV === 'development',
            ns: ['translation'],
            defaultNS: 'translation',
            cache: {
                enabled: true,
                expirationTime: 7 * 24 * 60 * 60 * 1000
            },
            interpolation: {
                escapeValue: false
            },
            detection: {
                order: ['nextRoute', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
                lookupQuerystring: 'lng',
                lookupCookie: 'i18next',
                lookupLocalStorage: 'i18nextLng',
                caches: ['localStorage', 'cookie'],
            },
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            },
            react: {
            },
            supportedLngs: locales,
            load: 'languageOnly',
        });

    i18n.services.languageDetector.addDetector(nextRouteLanguageDetector);
}

export const setDocumentLanguage = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const currentLanguage = i18n.language || 'en';

        if (currentLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = currentLanguage;
        }
    }
};

if (typeof window !== 'undefined') {
    setDocumentLanguage();
}

export const changeLanguage = (lng) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const currentLocale = getLocaleFromPathname(currentPath);

    if (lng !== currentLocale) {
        i18n.changeLanguage(lng);

        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            if (lng === 'ar') {
                document.documentElement.dir = 'rtl';
                document.documentElement.lang = 'ar';
            } else {
                document.documentElement.dir = 'ltr';
                document.documentElement.lang = lng;
            }

            if (currentPath) {
                const pathWithoutLocale = currentPath.replace(/^\/[^\/]+/, '') || '/';
                const newPath = `/${lng}${pathWithoutLocale}`;
                console.log("We are testing => window.location.href works");

                window.location.href = newPath;
            }
        }
    }
};

export default i18n;