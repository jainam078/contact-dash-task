
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import { MapContainerStyle } from "./MapAndGraph.Style";
import Loader from "../../Components/Loading/Loader";

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

const CovidMap: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  const worldMap = useQuery({
    queryKey: ["countries"],
    queryFn: () => fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json()),
    keepPreviousData: true,
    onError: (err) => {
      console.log("Unable to fetch Price History data at the moment");
    },
  });
  
  useEffect(() => {
    if (worldMap.isSuccess) {
      const data = worldMap.data;
      setCountryData(data);
    }
  }, [worldMap.isSuccess, worldMap.data]);

  if (!worldMap.isSuccess) {
    return <Loader spinner={true}/>;
  }

  return (
    <MapContainerStyle>
      {worldMap.isSuccess && !!countryData ? (
        <MapContainer center={[35.505, -0.09]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countryData?.map((country) => (
            <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
              <Popup>
                <h3>{country.country}</h3>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : <div>loading.....</div>}
    </MapContainerStyle>
  );
};

export default CovidMap;
