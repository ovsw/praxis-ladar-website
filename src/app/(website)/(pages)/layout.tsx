import "@/devlink/global.css";
import "@/app/(website)/assets/custom.css";
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
// import GoogleAnalytics from "@/app/(website)/components/GoogleAnalytics";
import {
  LinkRenderer,
  ImageRenderer,
} from "@/app/(website)/components/renderers";

import servicesArray from "@/app/(website)/data/services";
import ButtonRuntimeProps from "@/app/(website)/components/ButtonRuntimeProps";
// import CookieConsent from "@/app/(website)/components/CookieConsent";
import GTMComponent from "@/app/(website)/components/GtmComponent";

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
  const footerServicesListMarkup = servicesArray.map((service, key) => {
    return (
      <FooterServiceLink
        key={key}
        link={{ href: `/behandlung/${service.Slug}` }}
        text={service.Name}
      />
    );
  });

  return (
    <html lang="de">
      {/* Dr. Flex Online Booking External Service Widget */}
      <Script src="https://dr-flex.de/embed.js?medicalPracticeId=53337" />

      <body className={poppins.className}>
        {/* Webflow Devlink Wrapper, with renderer for Links */}
        <DevLinkProvider renderLink={LinkRenderer}>
          <MainLogo link={{ href: "/" }} />

          <Navbar ctaButton={<ButtonRuntimeProps cta={true} />} />
          <Menu
            logoLink={{ href: "/" }}
            homeLink={{ href: "/" }}
            ambienteLink={{ href: "/ambiente" }}
            behandlungLink={{ href: "/behandlung" }}
            uberUnsLink={{ href: "/uber-uns" }}
            teamLink={{ href: "/team" }}
            jobsLink={{ href: "/wir-suchen-dich" }}
            kontaktLink={{ href: "/kontakt" }}
          />
          <GlobalStyles />
          <div className="main-wrapper">{children}</div>
          <Footer
            servicesSlot={footerServicesListMarkup}
            ctaButtonSlot={<ButtonRuntimeProps cta={true} />}
          />
        </DevLinkProvider>
        <GTMComponent />
      </body>
    </html>
  );
}
