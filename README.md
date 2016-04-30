# GithubViewer
*Environment:
Node: v5.9.1
npm: 3.7.3

*URL:
http://localhost:3000

*Github:
clone the project using Git
git clone https://github.com/murirene/GithubViewer.git

*Dependency Installation
Inside of the directory run the following command to install the dependencies:
npm install

*Build
npm run build

*Unit Tests
npm test


Design: 
My design for the presentation embraced a self explanatory organization. I wanted the sections to not require any 
labeling. A user would comprehend the elements being presented. Asynchronous requests are made for items like 
comments. This allows the user to view the immediately available Issue, while the comments are fetched. 

I used Redux/React to implement the Github Viewer.
The Redux/React is a unidirectional flow that makes developing a web application easy and predictable.
[Actions] -> [Reducer] -> [Store] -> [View (React)] -> [Actions]

A single store manages the application state. React abstracts away the DOM and handles the rendering.
React is efficient as it maintains a virtual DOM and only updates the real DOM when it needs to be re-rendered.
The separation of concerns is promoted by this approach. The props for the components are dependency injected via the
containers that bind to the store. The higher level components which I call views aggregates components into a page.
The Redux Store works with the publisher/subscriber model, so components are notified of changes to the state.
I used the CSS3 Flexbox feature for laying out of the page. This is more consistent than the float or table approach. Also, Bootstrap
was used for the look and feel.
I used the new ES6 standard for the javascript version. The new standard has made programming javascript very concise
and solved some of the unpredictability issues.
NPM, Gulp.js and Webpack are used for bundling the dependencies, front end, and the server.
Babel is the transpiler used to process JSX and ES6 features.
I used Nightwatch.js and Jest.js for creating unit and functional tests. Jest.js is a natural fit for React component testing.
Jest.js also provides the code coverage.
Nightwatch.js is very easy to use for rapid Functional test development.
I used Chrome Development Tools and WebStorm IDE.
The application was developed on my Mac Pro.

How it works:
The src/js/views/GitHubViewer.jsx loads when the public/index.html is served from the node server (server.js). When the 
Component mounts an async action is dispatched for fetching the issues via the Github API. The GitHubViewer then mounts the 
 IssuesList.jsx component. Before an Issue is rendered, the /src/js/IssuesList.jsx truncateDescription function will 
 truncate the size of the description to 140. The /src/js/GitHubViewer.jsx transformHtml function will translate the 
 description into React Elements with the Login names as Html Links. When an Issue is clicked, then the issue details
  are fetched and /src/js/views/IssueDetails.jsx component is mounted. The Comments are fetched at this time. When 
  the Back button is pressed, then the IssuesList.jsx is mounted again. Actions submitted to the reducer function retuns a new state, in 
 which the Components on the page get updated via the props that are injected.  


Below are the components
Actions: Objects with at least a type attribute that applies changes to the state via the reducer.
	/src/js/actions
		requestIssues - Issues have been requested
		requestIssue - Issue Details have been requested
		requestComments - Comments for an issue have been requested
		receivedComments - Recieved the comments for the issue
		receivedIssue - Received the Issue Details
		receivedIssues - Received the Issues
		showList - Show the List of Issues 
		saveLinks - Save the Previous and Next Github URLs
		nextPage - Show the next Page of issues
		fetchIssue - Async Action for fetching the issue
		fetchComment - Async Action for fetching the comment
		fetchIssues - Async Action for fetching the issues

Components: React low level components
	/src/js/components
		Comment - Comment Component
		Issue - Issue Component
		Labels - Labels Component
		Pagination - Pagination Component
Views: Higher level React Components
	/src/js/views
		GitHubViewer - Application Component that Aggregates the Views
			High level component that aggregates the components above.
        IssueDetails - Issue Details view
        IssuesList - Issues List view
        
Containers: Binds the Components to the Store
	/src/js/containers
		These artifacts integrate the Store with the Components.

Reducers: Pure function that manages the application state.
	/src/js/reducers
		The reducer is a pure function that takes the actions and produces a new state.

Stores
	/src/js/stores
		Redux provided single store that creates the State via the reducer.

State: Application State
    issues - List of issues for the current page
    issue: - Issue rendered in the details page
    loading - Signifies if the page is being loaded
    status - Status of the application
    pages:  - The total number of pages for the pagination.
    page:  - The current page in the pagination.
    next: - The Next URL for the pagination
    view: - The current view being rendered (detail or list)
    comments: - Comments associated with the issues

*Start Application (open the browser to http://localhost:3000)
npm start

*Functional Test (It will expect the Mozilla browser, unless Chrome is configured in nightwatch.json)
1. Download the Selenium Standalone Server (selenium-server-standalone-2.53.0.jar) and place it in test/bin
http://www.seleniumhq.org/download/
2. run "npm start" on one command window
3. run "npm run automation" on another window.
4. The test should play the game and hit each mole.

********************
*Tools/Technologies*
********************

Node.js
https://nodejs.org/en/

Express.js
http://expressjs.com/

React.js
https://facebook.github.io/react/

Javascript - ES6
http://es6-features.org

Redux
https://github.com/reactjs/redux

Bootstrap
http://getbootstrap.com/

CSS3 - FlexBox
http://www.w3schools.com/css/css3_flexbox.asp

Jest.js
https://facebook.github.io/jest/

Nightwatch.js
http://nightwatchjs.org/

Gulp.js
http://gulpjs.com/

Webpack
https://webpack.github.io/

Babel
https://babeljs.io/docs/learn-es2015/

NPM
https://www.npmjs.com/

WebStorm
https://www.jetbrains.com/webstorm/

********************


Tests
    __test__ - Jade unit tests.
	test/functional -- End to End test that verifies all of the functionality
	/bin/selenium-server-standalone-2.53.0.jar - Selenium Driver used for the NightWatch Test. (Mac version)

