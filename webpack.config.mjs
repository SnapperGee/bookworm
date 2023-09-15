import { resolve as resolvePath, join as joinPath } from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer"

export default function(env, argv) {
    return {
        entry: [resolvePath('.', 'src', 'main', 'ts', 'index.ts'), resolvePath('.', 'src', 'main', 'scss', 'index.scss')],
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-map' : 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: { configFile: resolvePath('.', 'config', env.production ? 'tsconfig.dist.json' : 'tsconfig.dev.json') }
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        env.production ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        autoprefixer,
                                        tailwindcss

                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource'
                }
            ],
        },
        devServer: {
            static: {
                directory: resolvePath('.', 'build')
            },
            client: {
                overlay: false
            },
            compress: true,
            port: 9908,
            hot: true
        },
        resolve: { extensions: ['.tsx', '.ts', '.js'], },
        output: {
            filename: env.production ? 'index.bundle.min.mjs' : 'index.bundle.mjs',
            path: resolvePath('.', 'build'),
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "index.min.css" }),
            new HtmlWebpackPlugin({
                template: resolvePath('.', 'src', 'main', 'html', 'index.html'),
                scriptLoading: 'module'
            })
        ]
    }
};
