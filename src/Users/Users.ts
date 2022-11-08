// Faker is being used to randomly generate fake data - there is lots of Data that can be faked
// In this case we will fake name and address

import faker from 'faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}
