import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layouts/Header";
import Sidebase from "@/Components/Layouts/Sidebase";
import I18Provider from "@/Contexts/I18Provider.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["500"]
});

export const metadata = {
  title: "iderkaoui mustapha",
  description: "full-stack developer | iderkaoui mustapha"
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (

    <html lang="en">
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
