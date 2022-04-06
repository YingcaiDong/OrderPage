# OrderPage
 The order page.
To build the page, please run
```
npm install
npm run build:dev:sass
npm run build:dev:webpack
```

This order page is building using Webpack, Bootstrap(for responsive design) and Typescript(for writing code with datatype declared).This order page will do
- input valid check. (if required, empty input is not allowed)
- if valid success, it will export a summary.json file that originally suppose to post to the backend.
- the summary file contains all the input values.
- when input changes, the summary value will change accordingly.

Below are some screenshots.
