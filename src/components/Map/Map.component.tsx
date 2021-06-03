import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker.component';

import './Map.component.scss';

const Map: React.FC = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom className='map'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
            <LocationMarker />
        </MapContainer>
    );
};

export default Map;