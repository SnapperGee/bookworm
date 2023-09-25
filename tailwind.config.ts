import type { Config } from "tailwindcss";
import {resolve as resolvePath } from "node:path";

const config: Config = {
    content: [resolvePath(".", "src", "main", "html", "*.html")],
    theme: {
        extend: {
            colors: {
                "dk-orange": "#E6A342",
                orange: "#F2AC45",
                "lt-orange": "#FFB549",
                pink: "#F69998",
                cyan: "#82B99A",
                "bw-red": "#DC3731",
                green: "#1E3431",
                tan: "#E8CDB5",
                gray: "#BAB9B9"
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
