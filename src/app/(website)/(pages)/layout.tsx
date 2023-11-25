import "@/devlink/global.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import {
  DevLinkProvider,
  Menu,
  GlobalStyles,
  MainLogo,
  Footer,
  FooterServiceLink,
  Navbar,
} from "@/devlink";

import servicesArray from "@/app/(website)/data/services";
import ButtonRuntimeProps from "@/app/(website)/components/ButtonRuntimeProps";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const servicesListMarkup = servicesArray.map((service, key) => {
    return (
      <FooterServiceLink
        key={key}
        link={{ href: `/behandlung/${service.Slug}` }}
        text={service.Name}
      />
    );
  });

  return (
    <html lang="en">
      <Script src="https://dr-flex.de/embed.js?medicalPracticeId=53337" />
      <body className={poppins.className}>
        <DevLinkProvider>
          <MainLogo />
          <Navbar ctaButton={<ButtonRuntimeProps cta={true} />} />
          <Menu />
          <GlobalStyles />
          <div className="main-wrapper">{children}</div>
          <Footer
            servicesSlot={servicesListMarkup}
            ctaButtonSlot={<ButtonRuntimeProps cta={true} />}
          />
        </DevLinkProvider>
      </body>
    </html>
  );
}
