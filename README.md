# Express.js res.sendFile Error Handling

This repository demonstrates a common error encountered when using `res.sendFile` in Express.js to serve static files.  If the specified file does not exist, the application will throw an error. This example showcases the problem and provides a solution for robust error handling.

## Bug

The `bug.js` file contains an Express.js application that attempts to serve `index.html`. If `index.html` is missing, the server will crash.

## Solution

The `bugSolution.js` file demonstrates a solution by checking the existence of the file before attempting to serve it.  It gracefully handles the case where the file is not found.

## How to reproduce

1. Clone this repository.
2. Run `npm install express`
3. Run `node bug.js` (Observe the error if index.html is missing)
4. Create `index.html` in the same directory
5. Run `node bug.js` (Observe the successful response)
6. Run `node bugSolution.js` (Observe the graceful error handling)