import React, {useState} from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";

export default function Form({ addItem }: { addItem: (title: string) => void }) {
    const [text, setText] = useState('');

    const onChange = (value: string) => {
        setText(value);
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Введите задачу"
                value={text}
                onChangeText={onChange}
            />
            <Pressable 
            style={styles.button}
            onPress={() => addItem(text)}>
                <Text >Добавить</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(89, 235, 60)',
        borderColor: '#000',
        padding: 10,
        marginHorizontal: '20%',
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
    }
});