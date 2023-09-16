import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


function Page2({route, navigation}){

    const {id, nome} = route.params;

    return (
        <View style={styles.container}>
            <Text>Id: {id}</Text>
            <Text>Nome: {nome}</Text>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
              <Text>Voltar pro Home</Text>
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

export default Page2;