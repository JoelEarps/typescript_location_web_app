/// <reference types="@types/google.maps" />
// Parcel will parse html - will load the ts file in the script file and then parse the files
// Creates all the dependencies etc - check the console to see the new src tag loaded
// Anytime we export using export keyword, it will be exported as an object so we can do a multi export and input whilst being selective about it
// Different to export default - it will be the default export and therefore can be named anything
// In TS default is not really used
import { User } from './Users/Users';
import { Company } from './Company/Company';
import { CustomMap } from './Map/CustomMap';

// Maps is a class - requires mapDiv - reference to a html element where we present and house the map
const map = new CustomMap('map');
const user = new User();
const company = new Company();
map.addMarker(user);
map.addMarker(company);
