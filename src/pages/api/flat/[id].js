const flats = [
  {
    id: 1,
    name: "Kawalerka dla jednej osoby",
    price: 2000,
    area: "36 m²",
    rooms: 1,
    floor: 1,
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><br/> <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Including versions of Lorem Ipsum.<p/>`,
    country: "Polska",
    city: "Warszawa",
    voivodeship: "Ochota",
    street: "Dickensa",
    pictures: [
      "https://cordiapolska.pl/wp-content/uploads/2020/09/AdobeStock_331213478.jpg",
      "https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover_16_9/s2/bkf011021-3126.jpeg",
      "https://internityhome.pl/wp-content/uploads/2019/03/SIMPLIKA2.jpg",
    ],
    date: "2023-03-10 12:02:02",
    modified_date: "2023-03-12 12:02:02",
    contact_name: "Nowak Piotr",
    contact_phone: "500 500 500",
    contact_email: "nowakpiotr@nowak.pl",
    build_year: 2000,
  },
];

export default function handler(req, res) {
  if (!req?.query?.id) return res.status(404).json({ message: "Not found" });

  const findFlat = flats?.find((el) => el?.id == req?.query?.id);
  if (!findFlat) return res.status(404).json({ message: "Not found" });

  res.status(200).json({ payload: findFlat });
}
