import groq from "groq";

export const productsQuery = groq`
*[_type=="products"]{
    name,
    description,
    price,
    method,
    pickupdate,
    "id": _id,
    "image": image.asset->url,
    currency
  }`;

