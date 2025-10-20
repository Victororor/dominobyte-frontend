import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";
import fs from "fs";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), mkcert()],
    server: {
        https: {
            key: fs.readFileSync("../certs/localhost+2-key.pem"),
            cert: fs.readFileSync("../certs/localhost+2.pem"),
        },
        port: 5173,
    },
});
