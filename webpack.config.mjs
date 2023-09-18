import { resolve as resolvePath, join as joinPath } from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const chunkNames = Object.freeze(["index", "preferences", "readinglist", "recommendations"]);

const htmlWebpackPluginConfigs = Object.freeze(chunkNames.map(chunkName => new HtmlWebpackPlugin({
    filename: `${chunkName}.html`,
    template: resolvePath(".", "src", "main", "html", `${chunkName}.html`),
    scriptLoading: "module",
    chunks: [chunkName],
    excludeChunks: chunkNames.filter(otherChunkName => chunkName !== otherChunkName)
})));

export default function(env, argv) {
    return {
        entry: Object.fromEntries(chunkNames.map(chunkName => [ chunkName, [resolvePath(".", "src", "main", "ts", `${chunkName}.ts`), resolvePath(".", "src", "main", "scss", `${chunkName}.scss`)] ])),
        mode: env.production ? "production" : "development",
        devtool: env.production ? "source-map" : "eval-source-map",
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: { configFile: resolvePath(".", "config", env.production ? "tsconfig.dist.json" : "tsconfig.dev.json") }
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        env.production ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        autoprefixer,
                                        tailwindcss
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource"
                }
            ],
        },
        devServer: {
            static: {
                directory: resolvePath(".", "build")
            },
            client: {
                overlay: false
            },
            open: true,
            compress: true,
            port: 9908,
            hot: true
        },
        resolve: { extensions: [".ts", ".js"], },
        output: {
            filename: env.production ? "[name].bundle.min.mjs" : "[name].bundle.mjs",
            path: resolvePath(".", "build"),
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "[name].min.css" }),
            ...htmlWebpackPluginConfigs
        ]
    }
};
