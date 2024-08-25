import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  // Address to be pre-filled in Google Maps
  const address = "1600 Amphitheatre Parkway, Mountain View, CA";

  // Function to handle marker click
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Map options to disable POI clicks and interactions
  const mapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
    clickableIcons: false, // Disable clicks on POIs (places)
  };

  return (
    <APIProvider apiKey={googleApiKey}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: 50.073658, lng: 14.41854 }}
        defaultZoom={15}
        onClick={handleMarkerClick}
        // zoomControl={false} // Disable zoom control
        // scrollwheel={false} // Disable zooming with scroll
        // disableDoubleClickZoom={true} // Disable double-click zoom
        // draggable={false} // Disable dragging/panning
        // gestureHandling="none" // Disable all gestures
        disableDefaultUI={true} // Hide all default UI controls
        // options={mapOptions}
      />
      <Marker
        position={{ lat: 50.073658, lng: 14.41854 }}
        onClick={handleMarkerClick}
      />
    </APIProvider>
  );
};

export default GoogleMap;
