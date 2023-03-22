// http request: GET | POST | PUT | PATCH | DELETE (CRUD)
// GET: get data from server
// POST: sending data to server, to create new resource
// PUT/PATCH: update the entire data object/update certain fields
// DELETE: delete

// RESTful api

// Status code
// 100 - informational responses
// 200 - successful, OK
// 300 - redirection
// 400 - client error
// 500 - server error

// DOM - document object model, tree structure, javascript object
// <html>
// <head>
// <body>
// <h1>
// <button>
// html lifecycle
// DOMContentLoaded - DOM is available, but images might not be loaded yet
// load - everything is loaded
// beforeunload/unload

// topmost tree nodes
// children
// siblings and parents

// attribute (in html), property (in DOM)

// ECMAScript, Javascript, NodeJS
// EXMAscript - syntax standard
// Javascript - ECMAScript + WebAPI
// NodeJS - ECMAScript + NodeAPI

// Event Bubbling
// target is the element that triggered the event
// currentTarget is the element that has the handler on it

/*
npx
package.json/package-lock.json
JSX
setState is async

webpack

babel

virtual DOM - copy of the real DOM. When a component needs to update, React will first do the updates in virtual DOM (diffing algorithm, the process is called reconciliation), and then reflect those changes to the real DOM, because the real DOM manipulation is much more expensive to do.

synthetic event

props drilling/state lifting

ways to trigger component re-render;
1. change state/props
2. forceUpdate() // avoid using
3. parent re-render
4. shouldComponentUpdate()
*/
