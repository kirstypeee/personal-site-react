import { create } from "@storybook/theming/create";
import { themes } from "@storybook/theming";

export default create({
  ...themes.dark,

  brandTitle: "Kirsty Purcell",
  brandUrl: "https://kirstypurcell.dev",
  brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",
});
