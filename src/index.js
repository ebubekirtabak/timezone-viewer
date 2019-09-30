import { h, app } from "hyperapp";
const state = {
    people: [
        {
            name: "Ebubekir Tabak",
            timezone: "",
        },
        {
            name: "Jonh Doe",
            timezone:"",
        }
    ]
};


app({
    init: state,
    view: state =>
        h("div", {}, [
            h("h1", {}, state),
            h("button", { onClick: state => state - 1 }, "-"),
            h("button", { onClick: state => state + 1 }, "+")
        ]),
    node: document.getElementById("app")
});
