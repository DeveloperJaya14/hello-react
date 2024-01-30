// const heading = React.createElement("h1", {id:"heading", className:"head"}, "Hello World Of React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

{
  /* <div id="parent">
    <div id="child">
        <h1>Its an H1 Tag</h1>
        <h2>Its an H2 Tag</h2>
    </div>

      <div id="child2">
        <h1>Its an H1 Tag</h1>
        <h2>Its an H2 Tag</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
