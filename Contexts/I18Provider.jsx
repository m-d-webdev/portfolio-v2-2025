"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n, { setDocumentLanguage } from "@/lib/i18n";
import { getLocaleFromPathname } from "@/lib/server-i18n";

const I18nProvider = ({ children }) => {
    const pathname = usePathname();
    const initializedRef = useRef(false);

    useEffect(() => {
        if (!initializedRef.current && pathname) {
            const locale = getLocaleFromPathname(pathname);
            if (locale && locale !== i18n.language) {
                i18n.changeLanguage(locale);
            }
            initializedRef.current = true;
        }

        setDocumentLanguage();

        const handleLanguageChanged = () => {
            setDocumentLanguage();
        };

        i18n.on('languageChanged', handleLanguageChanged);

        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [pathname]);

    useEffect(() => {
        if (initializedRef.current && pathname) {
            const routeLocale = getLocaleFromPathname(pathname);
            if (routeLocale && routeLocale !== i18n.language) {
                i18n.changeLanguage(routeLocale);
            }
        }
    }, [pathname]);

    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
};

export default I18nProvider;