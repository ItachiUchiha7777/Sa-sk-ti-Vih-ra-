import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import Card from './Card'; // Ensure you import your Card component

const CultureScreen = () => {
  const [searchText, setSearchText] = useState('');

  const cardData = [
    {
        id: '1',
        title: 'Taj Mahal, Agra',
        description: 'Visit the iconic symbol of love, a UNESCO World Heritage site.',
        imageUrl: 'https://picsum.photos/150/150?random=1',
    },
    {
        id: '2',
        title: 'Jaipur, Rajasthan',
        description: 'Explore the Pink City, known for its stunning palaces and forts.',
        imageUrl: 'https://picsum.photos/150/150?random=2',
    },
    {
        id: '3',
        title: 'Varanasi, Uttar Pradesh',
        description: 'Experience the spiritual heart of India along the Ganges River.',
        imageUrl: 'https://picsum.photos/150/150?random=3',
    },
    {
        id: '4',
        title: 'Kerala Backwaters',
        description: 'Relax on a houseboat and enjoy the scenic beauty of Kerala.',
        imageUrl: 'https://picsum.photos/150/150?random=4',
    },
    {
        id: '5',
        title: 'Hampi, Karnataka',
        description: 'Discover the ruins of the Vijayanagara Empire in this UNESCO site.',
        imageUrl: 'https://picsum.photos/150/150?random=5',
    },
    {
        id: '6',
        title: 'Goa Beaches',
        description: 'Unwind at the beautiful beaches and vibrant nightlife of Goa.',
        imageUrl: 'https://picsum.photos/150/150?random=6',
    },
    {
        id: '7',
        title: 'Leh-Ladakh',
        description: 'Experience the breathtaking landscapes and culture of the Himalayas.',
        imageUrl: 'https://picsum.photos/150/150?random=7',
    },
    {
        id: '8',
        title: 'Mysore Palace, Karnataka',
        description: 'Marvel at the grand architecture of one of India’s most magnificent palaces.',
        imageUrl: 'https://picsum.photos/150/150?random=8',
    },
    {
        id: '9',
        title: 'Golden Temple, Amritsar',
        description: 'Visit the sacred Golden Temple, a spiritual center for Sikhs.',
        imageUrl: 'https://picsum.photos/150/150?random=9',
    },
    {
        id: '10',
        title: 'Ajanta and Ellora Caves, Maharashtra',
        description: 'Explore the ancient rock-cut caves and their exquisite carvings.',
        imageUrl: 'https://picsum.photos/150/150?random=10',
    },
];
  // Filter card data based on search text
  const filteredData = cardData.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onButtonPress={() => alert(`${item.title} Info`)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:"15%",
    padding: 20,
  },
  searchBar: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default CultureScreen;
