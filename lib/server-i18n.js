import en from "@/public/locales/en/translation.json"
import ar from "@/public/locales/ar/translation.json"
import fr from "@/public/locales/fr/translation.json"
export const locales = ['en', 'fr', 'ar']
const ob = { en, ar, fr };

export const GetTrans = lang => ob[lang] ? ob[lang] : ob['en']


export function getLocaleFromPathname(p) {
    const firstSegment = p.split('/')[1];

    if (locales.includes(firstSegment)) {
        return firstSegment;
    }

    return "en";
}