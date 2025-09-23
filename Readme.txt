Steps to create the React project from scratch:

1.  **Initialize a `package.json` file:**
    ```
    yarn init -y
    ```

2.  **Install React and ReactDOM:**
    ```
    yarn add react react-dom
    ```

3.  **Install development dependencies:**
    ```
    yarn add -D webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react babel-loader
    ```

4.  **Configure Babel:**
    Create a `.babelrc` file with the following content:
    ```json
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```

5.  **Configure webpack:**
    Create a `webpack.config.js` file with the following content:
    ```javascript
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
      },
    };
    ```

6.  **Create the HTML template:**
    Create a `public` directory and an `index.html` file inside it with the following content:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
    </html>
    ```

7.  **Create the React application files:**
    Create a `src` directory and the following files inside it:

    *   `index.js`:
        ```javascript
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        ```

    *   `App.js`:
        ```javascript
        import React from 'react';

        const App = () => {
          return <h1>Hello, React!</h1>;
        };

        export default App;
        ```

8.  **Add scripts to `package.json`:**
    Add the following scripts to your `package.json` file:
    ```json
    "scripts": {
      "start": "webpack-dev-server --mode development",
      "build": "webpack --mode production"
    }
    ```

9.  **Start the development server:**
    ```
    yarn start
    ```