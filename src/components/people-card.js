import { h } from 'hyperapp';

const getLocaleTime = ((timeZone) => {
    let localeTime = new Date().toLocaleString("en-US", {timeZone: timeZone});
    localeTime = new Date(localeTime);
    return localeTime;
});

export default PeopleCard;
