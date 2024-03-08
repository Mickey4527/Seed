import { Loader } from "@googlemaps/js-api-loader"

interface MapConfig {
    lat: number;
    lng: number;
    type: string;
    zoom?: number;
}

function GoogleMap({ lat = 13.5819774, lng = 100.5512421, type = "hybird", zoom = 6}: MapConfig) {
    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
    });

    if(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) {
        throw new Error("GOOGLE_MAPS_API_KEY is not defined")
    }


    loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        let map = new Map(document.getElementById("map") as HTMLElement, {
            center: { lat: lat, lng: lng },
            zoom: zoom,
            disableDefaultUI: true,
            mapTypeId: type,
        });
    });
      
    return (
        <>
            <div id="map" className="w-full h-full"></div>
        </>
    )
}

export default GoogleMap;