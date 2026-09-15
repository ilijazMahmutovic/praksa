import { View, Text, StyleSheet } from 'react-native';
const API_BASE_URL = 'http://localhost:2500';
function Footer() {
    return (
        <View>
            <View style={styles.footer}>
                <Text style={styles.title}>Noga</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    footer: {
        padding: 16,
        backgroundColor: '#f1f8ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Footer;