// create a client component
"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";
import { pageview } from "../lib/gtm";
import Script from "next/script";
import { setCookie, hasCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { CookieConsentBanner } from "@/devlink";

// declare datalayer type
declare global {
  interface Window {
    dataLayer: any;
  }
}

export default function GTMComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // send pageview event to GTM
    if (pathname) {
      pageview(pathname);
    }

    // Function to load GTM dynamically
    const loadGTM = () => {
      // alert("loading GTM!");
      const script = document.createElement("script");
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: (script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', "GTM-NBKK3XQX");
      `),
        }}
      />;
      document.body.appendChild(script);
    };

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    // Check if consent cookie exists
    const consentGiven = getCookie("GA4_Consent_Given");

    // If the consent cookie exists and is set to 'true', grant permissions
    if (consentGiven === "true") {
      console.log("consent given! enable all cookies");
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });
    } else {
      console.log("consent cookie not found!");
      // Set default settings to 'denied' if no consent cookie is found
      gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "denied",
      });
    }

    // Load GTM immediately
    loadGTM();
  }, [pathname, searchParams]);

  const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie("GA4_Consent_Given", "true");
    // alert("accepted");  // debug

    // update consent settings in GTM
    if (typeof window.dataLayer !== "undefined") {
      gtag("consent", "update", {
        ad_storage: "granted", // Example consent type
        analytics_storage: "granted", // Another example consent type
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });
      window.dataLayer.push({
        event: "cookie_consent_given",
      });
    }
  };
  const declineConsent = () => {
    // When user declines the consent, hide the popup and set the consent cookie so it doesn't ask again
    console.log("consent not given! no cookies allowed");
    setCookie("GA4_Consent_Given", "false");
    setShowConsent(false);
  };

  // if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
  //   return null;
  // }

  if (!showConsent) {
    return null;
  }

  return (
    <CookieConsentBanner
      acceptBtn={{
        onClick: acceptConsent,
      }}
      denyBtn={{
        onClick: declineConsent,
      }}
    />
  );
}
