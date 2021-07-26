import groq from "groq";

export const foodQuery = groq`
*[_type=="food"]{
    name,
    description,
    price,
    method,
    "id": _id,
    "image": image.asset->url,
    currency
  }`;