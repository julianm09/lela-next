export default {
    name: "products",
    title: "Products",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "ingredients",
        title: "Ingredients",
        type: "text",
      },
      {
        title: 'Method',
        name: 'method',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            { title: 'Deliver', value: 'deliver' },
            { title: 'Pickup', value: 'pickup' },
          ],
        },
      },
      {
        name: 'orderdate',
        title: 'Order Before Date',
        type: 'datetime',
      },
      {
        name: 'pickupdate',
        title: 'Pickup Date',
        type: 'datetime',
      },
      {
        name: "price",
        title: "Price",
        description: "Add cents as zeroes, ie 500 = $5",
        type: "number",
      },
          {
        name: "currency",
        title: "Currency",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
      initialValue: {
      currency: "cad",
    },
  };