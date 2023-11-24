"use client";
import { Navbar } from "@/devlink";
import { type } from "os";
import React from "react";

export default function NavWrapper() {
  return (
    <Navbar
      terminRuntimeProps={{
        onClick: (e: React.ChangeEvent<any>) => {
          e.preventDefault();
          // @ts-ignore
          toggleDrFlexAppointments();
        },
      }}
    />
  );
}
