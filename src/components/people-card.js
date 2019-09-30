import { h } from 'hyperapp';

const PeopleCard = ({ people }) => h("div", { class: "people-card" }, h("div", { class: "people_card__title"}, people.name));

export default PeopleCard;
