"use client";
import { ButtonPrimary } from "@/devlink";
import React from "react";

type Props = {
  params?: {
    runtimeProps?: Array<Object>;
    text?: string;
    link?: { href: string };
  };
};

export default function ButtonRuntimeProps({ params }: Props) {
  const defaultRuntimeProp = {
    onClick: (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      // @ts-ignore
      toggleDrFlexAppointments();
    },
  };

  return (
    <ButtonPrimary
      text={params?.text ?? "Online Termin"}
      link={{ href: params?.link?.href ?? "#" }}
      runtimeProps={params?.runtimeProps ?? defaultRuntimeProp}
    />
  );
}
