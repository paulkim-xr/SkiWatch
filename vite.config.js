import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
export default defineConfig({
    base: "/SkiWatch/",
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: function (id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("react"))
                            return "vendor-react";
                        if (id.includes("@radix-ui"))
                            return "vendor-radix";
                        if (id.includes("react-icons") || id.includes("lucide-react"))
                            return "vendor-icons";
                        if (id.includes("@dnd-kit"))
                            return "vendor-dnd";
                        if (id.includes("hls.js") || id.includes("video.js"))
                            return "vendor-media";
                        return "vendor";
                    }
                },
            },
        },
    },
});
