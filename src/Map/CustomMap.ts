export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(div_id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(div_id) as HTMLElement,
      {
        // This is required - even thought it says optional
        center: { lat: 52.5, lng: 0 },
        zoom: 8,
      }
    );
  }
}
