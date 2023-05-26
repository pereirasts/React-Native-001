import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./assets/image-background.jpg')} style={styles.imageBackground}>
      <Image source={require('./assets/image-react.png')} style={styles.imageForeground}/> 
       <Animatable.Text style={styles.text}
        animation="fadeIn"
        useNativeDriver="true"
        duration={5000}
       >React Native{'\n'}</Animatable.Text>
       <Text style={styles.textP}>
          Turma: ADS 2º Semestre
          {'\n'}
          Profº.: Jailson
          {'\n'}
          Aluno: Antonio Pereira
       </Text>

    </ImageBackground>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 370,
    height: 370
  },
  text: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: '#222',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  },
  textP: {
    color: "white",
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "center",
    textShadowColor: '#222',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  }
});
