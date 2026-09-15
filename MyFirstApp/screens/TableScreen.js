import { useCallback, useState } from 'react';
import { View, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Seznam from '../Seznam';
import Header from '../Header';

const API_URL = Platform.select({
    ios: 'http://localhost:2500',
    android: 'http://10.0.2.2:2500',
    default: 'http://localhost:2500',
});

export default function TableScreen() {
    const [racunalniki, setRacunalniki] = useState([]);

    const fetchRacunalniki = useCallback(() => {
        fetch(`${API_URL}/racunalniki`)
            .then(res => res.json())
            .then(setRacunalniki)
            .catch(err => console.error(err));
    }, []);
    useFocusEffect(
        useCallback(() => {
            fetchRacunalniki();
        }, [fetchRacunalniki])
    );

    return (
        <View style={{ flex: 1 }}>
            <Header title="RACUNALNIKI" />
            <Seznam racunalniki={racunalniki} onDelete={fetchRacunalniki} />
        </View>
    );
}