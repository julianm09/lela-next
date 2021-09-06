import groq from "groq";

export const infoQuery = groq`
*[_type=="info"]{
  weekdayopen,
  weekdayclose,
  weekendopen,
  weekendclose,
  sundayopen,
  sundayclose,
    "id": _id,

  }`;

