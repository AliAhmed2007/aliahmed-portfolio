import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";

// Inlined so we don't depend on tailwindcss internals which moved in v4
function flattenColorPalette(colors: Record<string, any>): Record<string, string> {
  return Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values === "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color === "DEFAULT" ? number : `${color}-${number}`]: hex,
          }))
        : [{ [color]: values }]
    )
  );
}

const config: Config = {
  // darkMode via class is still read by v4 through @config
  darkMode: ["class"],

  // content is not needed in v4 — auto-detected
  // theme colors and keyframes have moved to @theme in globals.css

  plugins: [
    // Aceternity UI utilities: bg-grid, bg-grid-small, bg-dot
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.6257413380501518"/></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
} satisfies Config;

export default config;