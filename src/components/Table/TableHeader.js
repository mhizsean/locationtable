export const table_head = [
  { title: "name", key: "name" },
  { title: "Phone number", key: "phoneNumber" },
  { title: "email", key: "email" },
  {
    title: "Address",
    key: "address",
    component: ({ item }) =>
      item[Math?.floor(Math?.random() * item?.length)]?.ad,
  },
  { title: "Longitude", key: "lng" },
  { title: "Latitude", key: "lat" },
];
