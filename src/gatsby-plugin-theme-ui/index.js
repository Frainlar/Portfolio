import { merge } from "lodash";

import colors from "./colors";

const fonts = {
  serif: "'Lora','Merriweather', Georgia, Serif",
  sansSerif: "'Open Sans','Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const breakpoints = [
  ["phone_small", 320],
  ["phone", 376],
  ["phablet", 540],
  ["tablet", 735],
  ["desktop", 1070],
  ["desktop_medium", 1280],
  ["desktop_large", 1440],
];

const colorModeTransition =
  "background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)";

export default merge({
  breakpoints,
  colorModeTransition,
  colors,
  fonts,
  initialColorMode: "light",
  useCustomProperties: true,
});
