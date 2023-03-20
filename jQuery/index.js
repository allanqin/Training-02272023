console.log("hello world");
//not defined, undefined(type, primitive)
console.log($);
//$("button.continue").html("Next Step...");
// http request(get) html, css, javascript
//cdn: content delivery network

/* $( "button.continue" ).html( "Next Step..." ); */

/*  
    const arr = [1];
    arr?.[0]
    what: 
        type of it,
        what args it takes, what it return
    how,
    why

    $: function, string, object
    html: function takes string, unknown return

*/

/* var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
}); */

/* 

    $: object, function
    console.log(typeof function foo(){}); object
*/
/* const foo = function(){};
console.log(typeof foo); //function
console.log(foo instanceof Function);
console.log("bind",foo.bind)
console.log(foo instanceof Object);
console.dir(foo); */

/* $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    success: function( result ) {
        console.log("result",result)
      //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
    }
}); */

/* 
    jquery:
        1.DOM Traversal and Manipulation
        2.Event Handling
        3.ajax
*/

/* 
    jquery
    create-react-app
    class component
    life cycle method
    jsx virtual dom
    boilerplate, webpack, babel
    project training, todolist, searching,
    functional component, hooks 
    redux, redux core, redux toolkit, thunk
    react router
    typescript
    testing: react testing library jest
    server-side coding with express.js
    nextjs vuejs

    hashmap
    array
    time complexity: sorting, binary search, 

*/

const $$ = function (selector) {
    class JQueryEle {
        constructor(selector) {
            const nodelist = document.querySelectorAll(selector);
            this.nodelist = nodelist;
        }
        html(html) {
            this.nodelist.forEach((ele) => {
                ele.innerHTML = html;
            });
            return this;
        }

        on(eventname, cb) {
            this.nodelist.forEach((ele) => {
                ele.addEventListener(eventname, cb);
            });
            return this;
        }
        show() {
            this.nodelist.forEach((ele) => {
                ele.style.removeProperty("display");
            });
            return this;
        }
        hide() {
            this.nodelist.forEach((ele) => {
                ele.style.display = "none";
            });
            return this;
        }
    }

    return new JQueryEle(selector);
};

$$("button.continue").html("Next Step...");
var hiddenBox = $$("#banner-message");
$$("#button-container button").on("click", function (event) {
    hiddenBox.show().hide().show();
});
