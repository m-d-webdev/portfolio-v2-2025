import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layouts/Header";
import Sidebase from "@/Components/Layouts/Sidebase";
import I18Provider from "@/Contexts/I18Provider.jsx";
import { GetTrans, locales } from "@/lib/server-i18n";
import IderkaouiToast from "@/Components/Global/MyToas";
import GreatCursor, { HanleMouseMoveWindow } from "@/Components/Client/GreatCursor";
import ChatProvider from "@/Contexts/ChatProvider";

const MYUSERNAME = process.env?.MYUSERNAME;

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
      <ChatProvider userName={MYUSERNAME}>
        <GreatCursor lang={lang}>
          {/* <body className={` ${lang == 'ar' ? vazirmatn.className : geistSans.className} h-lvh selection:bg-foreground  selection:text-background`}      > */}
          <IderkaouiToast />
          {/* For the client side , i have  another function for the server side */}
          <I18Provider>
            {/* ------------ */}
            <Header />
            <div className="max-h-[92vh] h-[92vh] pt-10 overflow-auto ">

              {children}
            </div>
          </I18Provider>
          {/* </body> */}
        </GreatCursor>
      </ChatProvider>
    </html>
  );
}
