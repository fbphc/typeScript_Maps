const api_key = process.env.GOOGLE_MAP_KEY;
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 module.exports = {
   entry: 'index.ts',
   plugins: [
     new HtmlWebpackPlugin({
       inject: false,
       template: './template.html',

       // Pass the full url with the key!
       apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}`,

     })
   ]
 }
