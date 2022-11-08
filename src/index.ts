/// <reference types="@types/google.maps" />
// Parcel will parse html - will load the ts file in the script file and then parse the files
// Creates all the dependencies etc - check the console to see the new src tag loaded
// Anytime we export using export keyword, it will be exported as an object so we can do a multi export and input whilst being selective about it
// Different to export default - it will be the default export and therefore can be named anything
// In TS default is not really used
import { User } from './Users/Users';
import { Company } from './Company/Company';

// Maps is a class - requires mapDiv - reference to a html element where we present and house the map
let map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  // This is required - even thought it says optional
  center: { lat: 52.5, lng: 0 },
  zoom: 8,
});
