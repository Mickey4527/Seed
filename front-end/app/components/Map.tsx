"use client";
import MapConfigComponent from "./map/map-config";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";


function GoogleMaps(){
	const mapRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
	  const initializeMap = async () => {
		const loader = new Loader({
		  apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
		  version: "quartely",
		});
  
		const { Map } = await loader.importLibrary("maps");
  
		const locationInMap = {
		  lat: 13.5819774,
		  lng: 100.5512421,
		};
  
		// MARKER
		const { Marker } = (await loader.importLibrary(
		  "marker"
		)) as google.maps.MarkerLibrary;
  
		const options: google.maps.MapOptions = {
		  center: locationInMap,
		  zoom: 6,
		  mapTypeId: "hybrid",
		  fullscreenControl: false,
		  streetViewControl: false,
		};
  
		
		const map = new Map(mapRef.current as HTMLDivElement, options);
  
		map.data.loadGeoJson('maps/provinces.geojson');
		google.maps.event.addListener(map.data, 'click', function(event: any) {
		  alert(event.latLng.lat())
		});
  
	  };
  
	  initializeMap();
	}, []);
  
	return (
	  <>
		<div className="absolute top-0 right-0 m-4 z-10 flex gap-4">
		  <MapConfigComponent />
		</div>
		<div className="w-full h-full" ref={mapRef} />
	  </>
	);
}

function enableProvinceDisplay() {
	
}
export default GoogleMaps;
