import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import tailwind from "@terrazzo/plugin-tailwind";

export default defineConfig({
  tokens: "./src/tokens.json",
  outDir: "./dist/",
  plugins: [
    css({ skipBuild: true }),
    tailwind({
      filename: "tailwind.css",
      theme: {
        /** @see https://tailwindcss.com/docs/configuration#theme */
        color: ["color.*"],
      },
    }),
  ],
});
