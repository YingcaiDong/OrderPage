# OrderPage
 The order page.
To build the page, please run
```
npm install
npm run build:dev:sass
npm run build:dev:webpack
```
The build result will save in the folder wwwroot.

This order page is building using Webpack, Bootstrap(for responsive design) and Typescript(for writing code with datatype declared).This order page will do
- input valid check. (if required, empty input is not allowed)
- if valid success, it will export a summary.json file that originally suppose to post to the backend.
- the summary file contains all the input values.
- when input changes, the summary value will change accordingly.

### Please go to wwwroot folder to get the html page and loaded to browser.

Below are some screenshots.

![responsive design-mobile](https://user-images.githubusercontent.com/22902303/161987103-c60947bc-0504-4d20-98af-ab6d42241b21.png)

![valid true](https://user-images.githubusercontent.com/22902303/161987105-f01e241d-6f98-4c9d-a61d-7db453d703ed.png)

![with validation](https://user-images.githubusercontent.com/22902303/161987107-73f4a435-5ca9-448a-a59e-7b4a709aef21.png)
