import type { Config } from "tailwindcss";
import {resolve as resolvePath } from "node:path";

const config: Config = {
    content: [resolvePath(".", "src", "main", "html", "*.html")],
    theme: {
        extend: {
            colors: {
                orange: "#F2AC45",
                pink: "#F69998",
                cyan: "#82B99A",
                "bw-red": "#DC3731",
                green: "#1E3431",
                tan: "#E8CDB5"
            },
            screens: {
                "fy-sm": "768px",
                "fy-md": "1024px",
                "fy-lg": "1536px"
            }
        },
        plugins: [],
    }
}

export default config;
