const parent = React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child"}, 
[React.createElement("h1",{},"i am a H1 tag"),
React.createElement("h2",{},"i am a H2 tag")]), 
React.createElement("div",{id:"child2"}, 
[React.createElement("h1",{},"i am a H1 tag"),
React.createElement("h2",{},"i am a H2 tag")])]);
console.log(parent);
const heading = React.createElement("h1", {id: "heading"}, "Hello World! from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);