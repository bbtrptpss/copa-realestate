import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";
import payloadConfig from "../../../../../payload.config";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config: payloadConfig, params, searchParams });

export default function Page({ params, searchParams }: Args) {
  return RootPage({ config: payloadConfig, params, searchParams, importMap });
}
