import { h } from 'hyperapp';

const getLocaleTime = ((timeZone) => {
    let localeTime = new Date().toLocaleString("en-US", {timeZone: timeZone});
    localeTime = new Date(localeTime);
    return localeTime;
});

const PeopleCard = ({people}) => h("div", { class: "people-card" },
    h("div", { class: "people_card__title"}, people.name),
    h("div", { class: "people_card__title"}, getLocaleTime(people.timeZone).toLocaleString()),
);
export default PeopleCard;
