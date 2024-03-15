"use client";
import MapConfigComponent from "./map/map-config";
import { useEffect, useState, useRef } from "react";
import Offcanvas from "./offcanvas/offcanvas";
import { Loader } from "@googlemaps/js-api-loader";


function GoogleMaps(){
	const mapRef = useRef<HTMLDivElement>(null);
	const [offcanvas, setOffcanvas] = useState(false);
	const [province, setProvince] = useState<string>("");

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
			setOffcanvas(true);
			setProvince(event.feature.getProperty('pro_th'));
		});
  
	  };
  
	  initializeMap();
	}, []);
  
	return (
	  <>
	  	<Offcanvas headerText={province} isOpen={offcanvas} onClose={() => setOffcanvas(false)}>
			<div>ข้อมูลจังหวด</div>
		</Offcanvas>
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
