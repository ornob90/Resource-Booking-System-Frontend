"use client";
import React, { ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.cookie = `timezone=${tz}; path=/; max-age=31536000`; // 1 year

  }, []);
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
