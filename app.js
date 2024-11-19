// const heading=React.createElement("h1",{id:"heading"},"Hello World Welcome to React"); 
//   React.createElement takes three arguments 1)Tag 2)object it pass a attribute such as id {}) 3)content
//The React.createElement creates a javascript object in object we have the props as attribute and chlidren as the content
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// Now the ReactDom Works to add the connent in the browser we are creating  React.createRoot based on id and we will render it on the browser
//  root.render(heading);
//This render talks to the browser and makes the object of h1 as a Element and post it on the web page


/**  This a nested div in html now we are Creating THis Nested HTML div USING react
 * 
 *<div id="parent">
     <div id="child1">
       <h1>Hello</h1>
       <h1>Hello</h1>
     </div>
     <div id="child2">
       <h1>Hello</h1>
       <h1>Hello</h1>
     </div>

     
</div>


 */

const parent =React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I am Child1 Tag of First h1"),React.createElement("h1",{},"I am Child1 Tag of second H1")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am Child2 Tag of First h1"),React.createElement("h1",{},"I am Child2 Tag of second H1 You are correct")])
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// render will work only once in browser
// we may get confuse while we are creating this nexted div so from Next onwards we are using the jsx.


