import type { ServerFunctionClient } from "payload";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import "@payloadcms/next/css";
import React from "react";
import { importMap } from "./admin/importMap.js";
import payloadConfig from "../../../payload.config";

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config: payloadConfig,
    importMap,
  });
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout config={payloadConfig} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
);

export default Layout;
