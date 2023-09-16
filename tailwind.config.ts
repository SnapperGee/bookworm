import type { Config } from "tailwindcss";
import {resolve as resolvePath } from "node:path";

const config: Config = {
    content: [resolvePath(".", "src", "main", "html", "*.html")],
    prefix: "bw-",
    theme: {
        extend: {
            colors: {
                orange: "#F2AC45",
                pink: "#F69998",
                cyan: "#82B99A",
                red: "#DC3731",
                green: "#IE3431",
                tan: "#E8CDB5"
            }
        },
        plugins: [],
    }
}

export default config;
