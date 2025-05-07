import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layouts/Header";
import Sidebase from "@/Components/Layouts/Sidebase";
import I18Provider from "@/Contexts/I18Provider.jsx";
import { GetTrans, locales } from "@/lib/server-i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["500"]
});

export const generateMetadata = async ({ params }) => {
  const { lang } = await params;
  const dict = GetTrans(lang)
  return {
    title: {
      template: `%s | ${dict?.SEO?.HOME?.TITLE}`,
      default: dict?.SEO?.HOME?.TITLE
    },
    description: dict?.SEO?.HOME?.DESCRIPTION
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (

    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mustapha Iderkaoui",
              url: "https://iderkaoui.site",
              sameAs: [
                "https://github.com/m-d-webdev",
                "https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/"
              ],
              jobTitle: "Full-Stack Web Developer",
              description: "Portfolio of Mustapha Iderkaoui, web developer based in Morocco - agadir ."
            }),
          }}
        />
      </head>
      <body className={` ${lang == 'ar' ? vazirmatn.className : geistSans.className} selection:bg-foreground  selection:text-background`}      >
        {/* For the client side , i have  another function for the server side */}
        <I18Provider>
          {/* ------------ */}
          <Header />
          <div className="w-full  flex justify-start items-start h-[90vh] gap-3">
            <Sidebase />
            <main className="max-h-full w-full h-full overflow-auto   flex flex-col items-center">
              {children}
            </main>
          </div>
        </I18Provider>
      </body>
    </html>
  );
}
