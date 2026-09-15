import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const API_BASE_URL = "https://loca.lt";

function Seznam({ racunalniki, onDelete }) {
    const [error, setError] = useState(null);
    const deleteRacunalnik = async (id) => {
        try {
            const res = await fetch(`${API_URL}/racunalniki/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete');
            onDelete();
        } catch (err) {
            setError(err.message);
        }
    };

    if (error) return <Text style={styles.error}>Napaka: {error}</Text>;

    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.headRow]}>
                <Text style={[styles.cell, styles.headCell]}>ZNAMKA</Text>
                <Text style={[styles.cell, styles.headCell]}>MODEL</Text>
                <Text style={[styles.cell, styles.headCell]}>CENA</Text>
                <Text style={[styles.cell, styles.headCell, { flex: 1.5 }]}>DATUM NAKUPA</Text>
                <Text style={[styles.cell, styles.headCell]}></Text>
            </View>

            {racunalniki.map(r => (
                <View style={styles.row} key={r.id}>
                    <Text style={styles.cell}>{r.znamka}</Text>
                    <Text style={styles.cell}>{r.model}</Text>
                    <Text style={styles.cell}>{r.cena}€</Text>
                    <Text style={[styles.cell, { flex: 1.5 }]}>{r.datum_nakupa}</Text>
                    <View style={styles.cell}>
                        <TouchableOpacity
                            style={styles.deleteBtn}
                            onPress={() => deleteRacunalnik(r.id)}
                        >
                            <Text style={styles.deleteBtnText}>Izbriši</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, borderWidth: 1, borderColor: '#c8c8c8' },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#c8c8c8',
        minHeight: 44,
        alignItems: 'center',
    },
    headRow: { backgroundColor: '#f1f8ff' },
    cell: {
        flex: 1,
        paddingHorizontal: 6,
        textAlign: 'center',
    },
    headCell: { fontWeight: 'bold' },
    deleteBtn: {
        backgroundColor: '#e53935',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    deleteBtnText: { color: '#fff', fontSize: 12 },
    error: { color: 'red', padding: 16 },
});

export default Seznam;