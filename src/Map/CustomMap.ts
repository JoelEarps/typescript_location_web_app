import { Mappable } from '../Mappable/Mappable';
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(div_id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(div_id) as HTMLElement,
      {
        // This is required - even thought it says optional
        center: { lat: 52.5, lng: 0 },
        zoom: 1,
      }
    );
  }
  // Two ways of doing this you can pass in instance of a User or a Company
  // What about if we have multiple different classes that require markers and further customisation
  // When use an OR operator - it will burrow down and check which properties are the same and only allow them to be used
  // It does this for all classes - which is not computationally efficient - therefore it is better to make it an interface

  // We are going to invert the dependency - every class, if you want to be an argument to add marker - here is what you have to do
  // In this case - have a location property that is an object - with a lat and long number
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      // Looking at type def file content can be a content?: string|null|Element|Text;
      // In order to customise
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hello there!',
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
