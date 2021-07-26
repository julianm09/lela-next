export default {
    name: "products",
    title: "Proucts",
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
        name: "price",
        title: "Price",
        description: "For now, add cents as zeroes, ie 500 = $5",
        type: "number",
      },
          {
        name: "currency",
        title: "Currency",
        type: "string",
      },
      {
        name: 'pickupdate',
        title: 'Pickup Date',
        type: 'datetime',
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