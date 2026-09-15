import { View } from 'react-native';
import Form from '../Form';
import Header from "../Header";

export default function FormScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Header title="DODAJ RACUNALNIK" />
            <Form onAdd={() => {}} />
        </View>
    );
}

