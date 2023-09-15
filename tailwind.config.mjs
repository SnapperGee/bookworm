import {resolve as resolvePath } from "node:path";

export default {
    content: [resolvePath(".", "src", "main", "html", "*.html")],
    theme: {
        extend: {},
    },
    plugins: []
}
