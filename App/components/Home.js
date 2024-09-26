import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { Card, Button, Paragraph } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView>

    <View style={styles.container}>
      {/* Example Card 1 */}
      <Card style={styles.card}>
        <Card.Cover 
          source={{ uri: 'https://wallpapers.com/images/featured/kedarnath-4k-9pd6c84fjldyenjg.jpg' }} // Lorem Picsum image
          style={styles.image}
          resizeMode="cover"  // Ensures image is not stretched
        />
        <Card.Title title="Card Title 1" />
        <Card.Content>
          <Paragraph>This is some content inside the card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Action 1')}>Action 1</Button>
          <Button onPress={() => console.log('Action 2')}>Action 2</Button>
        </Card.Actions>
      </Card>

      {/* Example Card 2 */}
      <Card style={styles.card}>
        <Card.Cover 
          source={{ uri: 'https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp' }} // Another Lorem Picsum image
          style={styles.image}
          resizeMode="cover"  // Ensures image is not stretched
        />
        <Card.Title title="Card Title 2" />
        <Card.Content>
          <Paragraph>Here is some more content for the second card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Action 1')}>Action 1</Button>
          <Button onPress={() => console.log('Action 2')}>Action 2</Button>
        </Card.Actions>
      </Card>

    {/* Example Card 3 */}
    <Card style={styles.card}>
        <Card.Cover 
          source={{ uri: 'https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg' }} // Lorem Picsum image
          style={styles.image}
          resizeMode="cover"  // Ensures image is not stretched
        />
        <Card.Title title="Card Title 1" />
        <Card.Content>
          <Paragraph>This is some content inside the card.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Action 1')}>Action 1</Button>
          <Button onPress={() => console.log('Action 2')}>Action 2</Button>
        </Card.Actions>
      </Card>

    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  image: {
    height: 200, // Set a fixed height to control image size
    width: '100%',
  },
});

export default HomeScreen;
