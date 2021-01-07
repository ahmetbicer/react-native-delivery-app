import * as React from 'react';
import { useEffect } from 'react';
import { PermissionsAndroid, StyleSheet, View } from 'react-native';
import AppBar from '../../../components/common/app-bar';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { useState } from 'react';
import colors from '../../../constants/colors';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import apiFetch from '../../../hooks/api-fetch';
import useToast from '../../../hooks/use-toast';

MapboxGL.setAccessToken("pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw");
export default function GetAddressScreen(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params;
    const [addressName, setAddressName] = useState("");
    const [coordinates, setCoordinates] = useState([]);
    const [address, setAddress] = useState(false);

    useEffect(() => {
        PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
            {
                title: 'Give Location Permission',
                message: 'App needs location permission to find your position.'
            }
        ).then(granted => {
            console.log(granted);
        }).catch(err => {
            console.warn(err);
        });
    }, [])

    async function onUserLocationUpdate(loc) {
        if (!address) {
            let response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc.coords.longitude},${loc.coords.latitude}.json?access_token=pk.eyJ1IjoiYWhtZXRiIiwiYSI6ImNrY2FwaDZrdTFncnkyeXA4eDU2YTEwamsifQ._64KIEotv79vcA9KDjMMLw`);
            let res = await response.json();
            setCoordinates(res.features[0].geometry.coordinates)
            setAddressName(res.features[0].place_name)
            setAddress(true)
        }
    }

    async function saveAddress() {
        if (address) {
            const params = {
                endpoint: "address",
                method: "POST",
                body: {
                    address: addressName,
                    lat: coordinates[1],
                    lon: coordinates[0],
                    address_type: routeParams.type
                },
                auth: true
            }

            await apiFetch(params)

            useToast({
                type: "success",
                text1: "Address saved.",
                text2: "Thanks!"
            })

            navigation.navigate("Profile")
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 99 }}>
                <AppBar screenName={props.route.name} />
            </View>
            <MapboxGL.MapView
                zoomLevel={9}
                compassEnabled={true}
                zoomEnabled={true}
                pitchEnabled={false}
                style={styles.map}
                styleURL={"mapbox://styles/ahmetb/ckgm0ug5b0ium19mqep82qlka"}
            >
                <MapboxGL.UserLocation
                    onUpdate={onUserLocationUpdate}
                />
                <MapboxGL.Camera
                    defaultSettings={{
                        centerCoordinate: [29.030472, 41.087084],
                    }}
                    zoomLevel={12}
                    followUserMode={'normal'}
                    followUserLocation
                />
            </MapboxGL.MapView>
            <View style={styles.locate}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Icon name={"crosshairs-gps"} color={"black"} size={25} />
                </View>
            </View>
            <View style={{ position: "absolute", bottom: 15, left: 0, right: 0, zIndex: 99 }}>
                <Button
                    compact={true}
                    mode="contained"
                    onPress={saveAddress}
                    contentStyle={{ height: 50 }}
                    style={{ marginHorizontal: 15 }}
                    color={colors.yellow}>
                    Save Address
                </Button>
            </View>
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
    },
    locate: {
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: colors.yellow,
        elevation: 4,
        borderRadius: 99,
        bottom: 95,
        right: 15,
        zIndex: 99
    }
})