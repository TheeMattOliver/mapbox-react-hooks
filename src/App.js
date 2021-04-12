import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import './style.css';

function App() {

  const [lng, setLng] = useState(5)
  const [lat, setLat] = useState(34)
  const [zoom, setZoom] = useState(2)

  const mapNode = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div>
        <div className="sidebarStyle">
          <h1>Hello mapbox</h1>
          <h2>Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</h2>
        </div>
      </div>
      <div ref={mapNode} className="mapContainer" />
    </div>
  );
}

export default App;
