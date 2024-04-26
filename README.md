# Jest API Tests

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHub%20Actions&logoColor=white)

A sample API test automation project in [TypeScript](https://www.typescriptlang.org/), using [Jest](https://jestjs.io/), [Axios](https://axios-http.com/docs/intro), and [jest-html-reporters](https://github.com/Hazyzh/jest-html-reporters#readme).

## ReqRes

The API chosen for testing was ReqRes. It simulates how a real application behaves, is highly available and accessible from anywhere. For more information, visit their website [here](https://reqres.in/).

## How it works

The project uses Jest as the test framework, Axios as the HTTP client to perform API requests, and jest-html-reporters to generate HTML reports.  
A workflow is set up to install Node.js, install the required packages, run the tests, and publish the HTML report to GitHub Pages. The report can be viewed [here](https://kafziel4.github.io/jest-api-tests/).

![report](./assets/report.PNG)

## How to run it

- Install [Node.js](https://nodejs.org/en/)
- Install the project packages: `npm install`
- Run the tests: `npm test`

![jest](assets/jest.gif)
