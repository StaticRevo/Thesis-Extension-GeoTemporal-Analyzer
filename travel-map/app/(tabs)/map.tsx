import { View, StyleSheet } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import countries from '@/data/countries.json';

import { useState } from 'react';

type Position = number[];

type CountryFeature = {
  id: string;
  properties: { name: string };
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][] | number[][][][];
  };
};

const countryFeatures = countries.features as unknown as CountryFeature[];

function getOuterRings(feature: CountryFeature): Position[][] {
  if (feature.geometry.type === 'Polygon') {
    return [(feature.geometry.coordinates as number[][][])[0]];
  }

  return (feature.geometry.coordinates as number[][][][]).map((polygon) => polygon[0]);
}

export default function MapScreen() {
  const [visited, setVisited] = useState<string[]>([]);

  const toggleCountry = (name: string) => {
    if (visited.includes(name)) {
      setVisited(visited.filter(c => c !== name));
    } else {
      setVisited([...visited, name]);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20,
          longitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
      >
        {countryFeatures.map((country) =>
          getOuterRings(country).map((ring, ringIndex) => (
            <Polygon
              key={`${country.id}-${ringIndex}`}
              coordinates={ring.map((coord) => ({
                latitude: coord[1],
                longitude: coord[0],
              }))}
              fillColor={visited.includes(country.properties.name) ? 'rgba(0,255,0,0.5)' : 'rgba(0,0,255,0.2)'}
              strokeColor="blue"
              strokeWidth={1}
              tappable
              onPress={() => toggleCountry(country.properties.name)}
            />
          ))
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});