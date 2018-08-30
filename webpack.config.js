const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Extract CSS
//const extractCSS = new ExtractTextPlugin('styles.min.css');
const MiniExtractCSS_1 = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "web.css",
  chunkFilename: "[id].css"
});

const MiniExtractCSS_2 = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "mobile.css",
  chunkFilename: "[id].css"
}); 

const outputDirectory = "build";
const current_dit = __dirname;

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.web.css$/,
        use: [
              MiniCssExtractPlugin.loader,
             
              {
                  loader: "css-loader",
                //  options: {  includePaths: [path.resolve("src/shared/Styles"),]}
          
              }
           ]
      },
      {
        test: /\.mobile.css$/,
        use: [
              MiniCssExtractPlugin.loader,
              
              {
                  loader: "css-loader",
                 // options: {  includePaths: [path.resolve("src/shared/Styles"),]}
          
              }
           ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ]
  },
  target: 'node',
  devServer: {
    port: 3011,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    MiniExtractCSS_1,MiniExtractCSS_2
  ]
};
