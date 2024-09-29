import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Button, Paragraph } from 'react-native-paper';

const data = [
  {
    id: '1',
    title: 'Card Title 1',
    content: 'This is some content inside the card.',
    image: 'https://wallpapers.com/images/featured/kedarnath-4k-9pd6c84fjldyenjg.jpg',
  },
  {
    id: '2',
    title: 'Card Title 2',
    content: 'Here is some more content for the second card.',
    image: 'https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp',
  },
  {
    id: '3',
    title: 'Card Title 3',
    content: 'This is some content inside the card.',
    image: 'https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg',
  },
  {
    id: '4',
    title: 'Kotdwar',
    content: 'This is some content inside the card.',
    image: 'https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg',
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover 
        source={{ uri: item.image }} 
        style={styles.image} 
        resizeMode="cover" 
      />
      <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph>{item.content}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log('Action 1')}>Action 1</Button>
        <Button onPress={() => console.log('Action 2')}>Action 2</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: '100%',
  },
});

export default HomeScreen;
