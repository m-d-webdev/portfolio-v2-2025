import { Geist, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layouts/Header";
import I18Provider from "@/Contexts/I18Provider.jsx";
import { GetTrans } from "@/lib/server-i18n";
import IderkaouiToast from "@/Components/Global/MyToas";
import ChatProvider from "@/Contexts/ChatProvider";
import { Analytics } from '@vercel/analytics/next';

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
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["500"]
});

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
        {/* <GreatCursor lang={lang}> */}
        <body className={` ${lang == 'ar' ? vazirmatn.className : geistSans.className} h-lvh selection:bg-foreground  selection:text-background`}      >
          <IderkaouiToast />
          {/* For the client side , i have  another function for the server side */}
          <I18Provider>
            {/* <BirdRandomTrip /> */}
            {/* ------------ */}
            <Header />
            {/* <div className="max-h-[92vh] h-[92vh] pt-10 overflow-auto "> */}
            <div className="  overflow-auto ">
              <Analytics />
              {children}
            </div>
          </I18Provider>
        </body>
        {/* </GreatCursor> */}
      </ChatProvider>
    </html>
  );
}
