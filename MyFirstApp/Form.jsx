import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const API_BASE_URL = "https://loca.lt";

function Form({ onAdd }) {
    const [znamka, setZnamka] = useState('');
    const [model, setmodel] = useState('');
    const [cena, setCena] = useState('');
    const [datumNakupa, setDatumNakupa] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await fetch(`${API_URL}/racunalniki`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    znamka,
                    model,
                    cena,
                    datum_nakupa: datumNakupa,
                }),
            });
            setZnamka('');
            setmodel('');
            setCena('');
            setDatumNakupa('');
            onAdd();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.form}>
            <View style={styles.field}>
                <TextInput
                    style={styles.input}
                    placeholder="ZNAMKA"
                    value={znamka}
                    onChangeText={setZnamka}
                />
            </View>
            <View style={styles.field}>
                <TextInput
                    style={styles.input}
                    placeholder="MODEL"
                    value={model}
                    onChangeText={setmodel}
                />
            </View>
            <View style={styles.field}>
                <TextInput
                    style={styles.input}
                    placeholder="CENA"
                    value={cena}
                    onChangeText={setCena}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>DATUM NAKUPA</Text>
                <TextInput
                    style={styles.input}
                    placeholder="YYYY-MM-DD"
                    value={datumNakupa}
                    onChangeText={setDatumNakupa}
                />
            </View>
            <View style={styles.field}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Dodaj</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: { padding: 16 },
    field: { marginBottom: 12 },
    label: { marginBottom: 4, fontWeight: 'bold' },
    input: {
        borderWidth: 1,
        borderColor: '#c8c8c8',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    button: {
        backgroundColor: '#2f80ed',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default Form;