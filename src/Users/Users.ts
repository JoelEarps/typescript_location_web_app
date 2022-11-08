// Faker is being used to randomly generate fake data - there is lots of Data that can be faked
// In this case we will fake name and address

import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // When class is created randomly generate name and location
    this.name = faker.name.firstName();
    // Lat and long are strings - so need converting to numbers
    // To direct assignment like below will fail as lat isn't assigned to an object and the properties inside of it
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
