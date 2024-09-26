import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
const Card = ({ title, description, imageUrl, onButtonPress }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    View more
  </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        padding: 15,
        margin: 10,
        width: 150, // Set a width for your cards
    },button:{
        borderRadius:20,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
    },
});

export default Card;
