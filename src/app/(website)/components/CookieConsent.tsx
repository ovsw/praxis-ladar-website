"use client";
import { setCookie, hasCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { CookieConsentBanner } from "@/devlink";

export default function CookieConsentCustom() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie("GA4_Consent")) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie("GA4_Consent", "true");
    // alert("accepted");  // debug

    // Trigger GTM script load
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("updateGTMConsent"));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setCookie("GA4_Consent", "false");
    setShowConsent(false);
    // setCookie("consent", "false");
  };

  if (!showConsent) {
    return null;
  }

  return (
    <CookieConsentBanner
      link={{ href: "/datenschutz" }}
      acceptBtn={{
        onClick: acceptConsent,
      }}
      denyBtn={{
        onClick: declineConsent,
      }}
    />
  );
}
