# Drew Cuddhy Training Peaks Code Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Server
Note that this is a front end only.  To properly render, your server must be configured correctly.  This repo assumes an `.env` file with the following configuration:
```
REACT_APP_ENDPOINT=<YOUR_ENDPOINT>
```

## Run Locally

Install dependencies

### `yarn install`

Run App

### `yarn start`
_you can run the app on any port you'd like, but Cypress tests assume that you are on port 3000._

Test

### `yarn run cypress:open`

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

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).