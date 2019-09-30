import { h, app } from "hyperapp";
import PeopleCard from './components/people-card';

const state = {
    people: [
        {
            name: "Ebubekir Tabak",
            timeZone: "Europe/Istanbul",
        },
        {
            name: "Jonh Doe",
            timeZone: "Asia/Shanghai",
        },
        {
            name: "Jane Doe",
            timeZone: "Asia/Kolkata",
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
