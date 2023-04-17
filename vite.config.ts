import * as reactPlugin from "vite-plugin-react";
import type { UserConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

const config: UserConfig = {
  jsx: "react",//@ts-ignore
  plugins: [vitePluginFaviconsInject('./src/assets/favicon.webp'), reactPlugin],
};

export default config;
