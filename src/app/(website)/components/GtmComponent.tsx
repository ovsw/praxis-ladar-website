// create a client component
"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { pageview } from "../lib/gtm";
import Script from "next/script";

// declare datalayer type
declare global {
  interface Window {
    dataLayer: any;
  }
}

export default function GTMComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // send pageview event to GTM
    if (pathname) {
      pageview(pathname);
    }

    // Function to load GTM dynamically
    const loadGTM = () => {
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

    // Load GTM immediately
    loadGTM();

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    // Check if consent cookie exists
    const consentGiven = getCookie("consent");

    // If the consent cookie exists and is set to 'true', grant permissions
    if (consentGiven === "true") {
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });
    } else {
      // Set default settings to 'denied' if no consent cookie is found
      gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "denied",
      });
    }

    // Listen for the loadGTM event
    window.addEventListener("updateGTMConsent", () => {
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
    });
  }, [pathname, searchParams]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-NBKK3XQX`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
