// event loop, promise, fetch, request

// Event loop: callstack, async apis, task queue (message queue)
// stack        queue
//
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 0);
// console.log(5);

// let start = performance.now();
// setTimeout(() => {
//   console.log(performance.now() - start);
// }, 0);

// let i = 0;
// while (i < 10000000000) {
//   i++;
// }

// function foo() {
//   for (var i = 0; i < 5; i++) {
//     // iife function
//     (function () {
//       var num = i;
//       setTimeout(() => {
//         console.log(num); // 01234
//       }, num * 1000);
//     })();
//   }
// }

// foo();

// const getData = (id, cb) => {
//   setTimeout(() => {
//     let data = "the first response";
//     cb(data);
//   }, 1000);
// };
// const getData2 = (id, cb) => {
//   setTimeout(() => {
//     let data = "the second response";
//     cb(data);
//   }, 1000);
// };
// const getData3 = (id, cb) => {
//   setTimeout(() => {
//     let data = "the third response";
//     cb(data);
//   }, 1000);
// };

// // callback hell
// getData(1, (data) => {
//   console.log(data);
//   getData2(2, (data2) => {
//     console.log(data2);
//     getData3(3, (data3) => {
//       console.log(data3);
//       getData3(3, (data3) => {
//         console.log(data3);
//         getData3(3, (data3) => {
//           console.log(data3);
//           getData3(3, (data3) => {
//             console.log(data3);
//           });
//         });
//       });
//     });
//   });
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// XHR: xml http request
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     console.log(xhttp.response);
//   }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// xhttp.send();

// function myFetch(url, cb, method) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method || "GET", url);
//   xhr.responseType = "json";
//   xhr.onload = function () {
//     cb(xhr.response);
//   };

//   xhr.onerror = function () {
//     console.log("error");
//   };
//   xhr.send();
// }

// function foo(data) {
//   alert(data);
// }

// myFetch("https://jsonplaceholder.typicode.com/posts/1", foo);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// promise: pending, fulfilled, rejected

// executor function
// let p = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     resolve(2);
//     console.log(4);
//   }, 1000);
// });

// prototype method, static method
// p.then((data) => {
//   console.log(data);
//   return 3;
// }).then((data2) => {
//   console.log(data2);
// });

// const getData = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = "the first response";
//       resolve(data);
//     }, 1000);
//   });
// };
// const getData2 = (id) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let data = "the second response";
//       res(data);
//     }, 1000);
//   });
// };
// const getData3 = (id) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let data = "the third response";
//       res(data);
//     }, 1000);
//   });
// };

// getData(1)
//   .then((data) => {
//     console.log(data);
//     return getData2(2);
//   })
//   .then((data2) => {
//     console.log(data2);
//     return getData3(3);
//   })
//   .then((data3) => {
//     console.log(data3);
//     return "hello";
//   })
//   .then((data4) => console.log(data4));

// let p = new Promise((res, rej) => {
//   res(1);
//   // rej(2);
// });

// p.then(
//   (data) => {
//     console.log(data);
//     throw Error("error inside .then()");
//   },
//   (err) => {
//     // will not handle errors in the same .then()
//     console.log("1st onrejected", err);
//   }
// )
//   .then(
//     () => {
//       console.log("2nd then");
//     },
//     () => {
//       console.log("2nd onrejected");
//     }
//   )
//   .catch((err) => {
//     console.log("from .catch()", err);
//   });

// function myFetch(url, method) {
//   return new Promise((res, rej) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method || "GET", url);
//     xhr.responseType = "json";
//     xhr.onload = function () {
//       res(xhr.response);
//     };

//     xhr.onerror = function () {
//       rej("error");
//     };
//     xhr.send();
//   });
// }

// myFetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => {
//     console.log(data);
//     return data.userId;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// microtask queue, task queue
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);
// Promise.resolve(4).then((data) => console.log(data));
// console.log(5);

// async/await: syntax sugar

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(1);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// function getData() {
//   const response = fetch("https://jsonplaceholder.typicode.com/posts/1");
//   return response;
// }

// getData()
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//   });
// console.log(getData());

// await/async vs .then()

// promise prototype methods
// then, catch, finally

// promise static methods
// all, resolve, reject, any, race, allSettled

// const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
// const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     return values.map((value) => value.json());
//   })
//   .then((values) => {
//     console.log(values);
//   });
