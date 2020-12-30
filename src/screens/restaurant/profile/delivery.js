import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../../../components/common/app-bar';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw");
export default function DeliveryScreen(props) {

    return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 99 }}>
                <AppBar screenName={props.route.name} />
            </View>
            <MapboxGL.MapView
                zoomLevel={9}
                compassEnabled={true}
                compassViewPosition={3}
                zoomEnabled={true}
                pitchEnabled={false}
                style={styles.map}
                styleURL={"mapbox://styles/ahmetb/ckgm0ug5b0ium19mqep82qlka"}
            >
                <MapboxGL.Camera
                    defaultSettings={{
                        centerCoordinate: [29.030472, 41.087084],
                    }}
                    zoomLevel={12}
                />
                <MapboxGL.ShapeSource id='line1' shape={{
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [
                                        29.030472,
                                        41.087084
                                    ],
                                    [
                                        36.328125,
                                        41.280079
                                    ]
                                ]
                            }
                        }
                    ]
                }}>
                    <MapboxGL.LineLayer id='linelayer1' style={{ lineColor: 'red' }} />
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map_container: {
        flex: 1
    },
    map: {
        flex: 1,
    }
})