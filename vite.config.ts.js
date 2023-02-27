// vite.config.ts
import {sveltekit} from "@sveltejs/kit/vite";
import {defineConfig} from "vitest/config";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
export {
  vite_config_default as default
};
