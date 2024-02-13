import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

export default ({ mode }) => {
	return defineConfig({
		plugins: [react(), svgr()],
	});
};
