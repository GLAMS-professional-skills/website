// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Professional skills workshop - UoE SoM";
export const SITE_DESCRIPTION =
  "Workshop website for mathematics postgraduate researchers to learn more technical skills.";
//export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "'Professional Skills' Workshop";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
