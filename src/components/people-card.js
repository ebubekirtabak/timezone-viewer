import { h } from 'hyperapp';

const getLocaleTime = ((timeZone) => {
    let localeTime = new Date().toLocaleString("en-US", {timeZone: timeZone});
    localeTime = new Date(localeTime);
    return localeTime;
});

const getTimeDifferent = ((timeZone) => {
    const localTime = getLocaleTime(timeZone);
    const timeDifferent = (localTime.getTime() - new Date().getTime())
    return Math.round(timeDifferent / (1000 * 3600 ));
});

const PeopleCard = ({people}) => h("div", { class: "people-card" },
    h("div", { class: "people_card__title"}, people.name),
    h("div", { class: "people_card__title"}, getLocaleTime(people.timeZone).toLocaleString()),
);
export default PeopleCard;
