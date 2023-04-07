class FlatSchema {
  constructor({
    name,
    price,
    area,
    rooms,
    floor,
    description,
    country,
    city,
    voivodeship,
    street,
    pictures,
    date,
    contact_name,
    contact_phone,
    contact_email,
    build_year,
  }) {
    this.name = name;
    this.price = price;
    this.area = area;
    this.rooms = rooms;
    this.floor = floor;
    this.description = description;
    this.country = country;
    this.city = city;
    this.voivodeship = voivodeship;
    this.street = street;
    this.pictures = pictures;
    this.date = date;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.contact_email = contact_email;
    this.build_year = build_year;

    this.createValidate();
  }
  createValidate() {
    // const emailRegex = /^\S+@\S+\.\S+$/;
    if (!this.name) return false;
    if (!this.price) return false;
    if (!this.area) return false;
    if (!this.rooms) return false;
    if (!this.floor) return false;
    if (!this.description) return false;
    if (!this.country) return false;
    if (!this.city) return false;
    if (!this.voivodeship) return false;
    if (!this.street) return false;
    if (!this.pictures) return false;
    if (!this.date) return false;
    if (!this.contact_name) return false;
    if (!this.contact_phone) return false;
    if (!this.contact_email) return false;
    if (!this.build_year) return false;

    return true;
  }
}

export default FlatSchema;
