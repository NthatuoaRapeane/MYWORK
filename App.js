import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}>
        <Image
          style={styles.image}
          source={require('./picture.jpg')} 
          resizeMode="cover" 
        />
        <View style={styles.boxTextContainer}>
          <Text style={styles.boxText}>Nthatuoa Rapeane</Text>
          <Text style={styles.boxText}>1 hr ago</Text>

          <Text style={styles.subText}>Those are my pictures that were captured by Sebolelo mokhele in 2020,she is my friend.</Text>
          <Image
            style={styles.subImage}
            source={require('./pic.jpg')} 
            resizeMode="cover" 
            
          />
         <Image
         style={styles.subImage}
         source={require('./snap.jpg')}
         />
          <AntDesign name="like2" size={24} color="black" />
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    margin: 10,
    paddingLeft: 10, 
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  boxTextContainer: {
    justifyContent: 'center', 
  },
  boxText: {
    fontSize: 16, 
  },
  subText: {
    fontSize: 18, 
    marginTop:0
  },
  subImage: {
    width: 250,
    height: 250,
    marginTop: 30, 
  },
});
