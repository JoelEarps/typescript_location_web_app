// Faker is being used to randomly generate fake data - there is lots of Data that can be faked
// In this case we will fake name and address

import faker from 'faker';
import { Mappable } from '../Mappable/Mappable';

// Want to make sure that the User Class to Satisfy the Interface - this way TS can make sure the User is Implemented correctly
// Add a custom variable e.g. color to Mappable Interface it will create Error
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

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
