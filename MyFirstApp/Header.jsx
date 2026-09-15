import { View, Text, StyleSheet } from 'react-native';
const API_BASE_URL = 'http://localhost:2500';
function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: '#f1f8ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;