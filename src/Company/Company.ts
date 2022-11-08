import faker from 'faker';

export class Company {
  companyName: string;
  companyCatchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyCatchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div><h1>User name is ${this.companyName}</h1><h3>The company slogan is ${this.companyCatchPhrase}</h3></div>`;
  }
}
