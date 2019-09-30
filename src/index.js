import { h, app } from "hyperapp";
import PeopleCard from './components/people-card';

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
            h("div", { class: "grid" }, state.people.map(item =>
                h("div", { class: "grid__item" }, h(PeopleCard, {people: item}, {}))
            )),
        ]),
    node: document.getElementById("app")
});
