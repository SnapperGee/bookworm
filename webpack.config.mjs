import { resolve as resolvePath, join as joinPath } from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default function(env, argv) {
    return {
        entry:
        {
            genres: [resolvePath(".", "src", "main", "ts", "genres.ts"), resolvePath(".", "src", "main", "scss", "genres.scss")],
            index: [resolvePath(".", "src", "main", "ts", "index.ts"), resolvePath(".", "src", "main", "scss", "index.scss")],
            readinglist: [resolvePath(".", "src", "main", "ts", "readinglist.ts"), resolvePath(".", "src", "main", "scss", "readinglist.scss")],
            recommendations: [resolvePath(".", "src", "main", "ts", "recommendations.ts"), resolvePath(".", "src", "main", "scss", "recommendations.scss")]
        },
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
            new MiniCssExtractPlugin({ filename: "index.min.css" }),
            new HtmlWebpackPlugin({
                filename: "genres.html",
                template: resolvePath(".", "src", "main", "html", "genres.html"),
                scriptLoading: "module",
                chunks: ["genres"],
                excludeChunks: ["index", "readinglist", "recommendations"]
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: resolvePath(".", "src", "main", "html", "index.html"),
                scriptLoading: "module",
                chunks: ["index"],
                excludeChunks: ["genres", "readinglist", "recommendations"]
            }),
            new HtmlWebpackPlugin({
                filename: "readinglist.html",
                template: resolvePath(".", "src", "main", "html", "readinglist.html"),
                scriptLoading: "module",
                chunks: ["readinglist"],
                excludeChunks: ["index", "genres", "recommendations"]
            }),
            new HtmlWebpackPlugin({
                filename: "recommendations.html",
                template: resolvePath(".", "src", "main", "html", "recommendations.html"),
                scriptLoading: "module",
                chunks: ["recommendations"],
                excludeChunks: ["index", "genres", "readinglist"]
            })
        ]
    }
};
