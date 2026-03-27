import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
        globals: true,
        include: [
            "src/tests/unit/**/*.test.ts",
            "src/tests/unit/**/*.test.tsx",
            "src/tests/integration/**/*.test.ts",
            "src/tests/integration/**/*.test.tsx",
        ],
        exclude: [
            "src/tests/e2e/**",
            "node_modules/**",
            "dist/**",
            ".next/**",
        ],
    },
});