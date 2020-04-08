
// This library allows us to combine paths easily
const path = require('path');
module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devServer: {
      contentBase: './',
      publicPath: '/output'
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] 
            // Note that postcss loader must come before sass-loader
         },
         {
            test: /\.css/,
            use: ['style-loader', 'css-loader'] 
         },
         {
            test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
            use: ["url-loader"]
         }
      ]
   }
};