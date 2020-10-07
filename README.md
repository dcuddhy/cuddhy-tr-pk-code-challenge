# Drew Cuddhy Training Peaks Code Challenge
October 2020

## Server
Note that this is a front end only.  To properly render, your server must be configured correctly.  This repo assumes an `.env` file with the following configuration:
```
REACT_APP_ENDPOINT=<YOUR_ENDPOINT>
```

## Run Locally
This app was created using create-react-app.  Boilerplate readme is appended for your convenience.

Install dependencies
`
$ yarn
`

Run App
`
$ yarn start
`
_you can run the app on any port you'd like, but Cypress tests assume that you are on port 3000._

Test
`
$ yarn run cypress:open
`

## Acceptance Criteria
### Hard Criteria
- run calculations
- display chart
- display calculation results

### Qualitative Criteria
- Well-structured
- Production quality
- Readable
- Maintainable
- Testable

_Aesthetics not considered_

## Algorithm
- Write a method that finds the best 20 minute power effort, where "best" is defined as highest continuous average for the given time period
- Make your algorithm as efficient as possible
- Use your method to calculate the 1, 5, 10, 15, and 20 minute best efforts

## User Interface Functionality
- Display the power output over time on a chart, using time as the X axis
- Display the 1, 5, 10, 15, and 20 minute best effort values

## Best Practices
- This program was purposely written without best practices in mind
- Rewrite and refactor to use best practices, data structures, functional or OO patterns
- Refactor to display additional channels such as heart rate and speed

## Communication and Delivery
- If you have any questions on the code or instructions, please don't hesitate to email
- Please submit your completed test as a zip file, private dropbox or other file sharing link, or using a private github repo
- Include any information or instructions needed to compile and run your application

___

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
