import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Home({navigation}){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Page2', {id: 15, nome: "Escova de cabelo"})}>
              <Text>Próxima Página</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;