"use client";
import { ButtonPrimary, CtaButton } from "@/devlink";
import React from "react";

type Props = {
  cta?: boolean;
  runtimeProps?: Array<Object>;
  text?: string;
  link?: { href: string };
};

export default function ButtonRuntimeProps({
  cta,
  runtimeProps,
  text,
  link,
}: Props) {
  const defaultRuntimeProps = {
    onClick: (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      // @ts-ignore
      toggleDrFlexAppointments();
    },
  };

  return (
    <>
      {!cta ? (
        <ButtonPrimary
          text={text ?? "Online Termin"}
          link={{ href: link?.href ?? "#" }}
          runtimeProps={runtimeProps ?? defaultRuntimeProps}
        />
      ) : (
        <CtaButton
          text={text ?? "Online Termin"}
          link={{ href: link?.href ?? "#" }}
          runtimeProps={runtimeProps ?? defaultRuntimeProps}
        />
      )}
    </>
  );
}
