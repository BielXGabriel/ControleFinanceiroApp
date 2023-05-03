import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import Fontes

//import icons
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(153,96,249,1)', 'rgba(120,55,254,1)']}
        style={styles.headerGradient}>

        <View style={styles.row}>

          <TouchableOpacity>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.imgPerfil}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_OFfTVd4FTVAFEFQTmwkNahMMH7Akk8apnA&usqp=CAU' }}
            />
          </TouchableOpacity>

        </View>
      </LinearGradient>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={styles.resumoSaldo}>
          <Text style={{ color: '#3A3A3A', fontSize: 20, fontFamily: 'padding' }}>Seu Saldo Total:</Text>

          <TouchableOpacity>
            <Text style={{ color: 'rgba(120,55,254,1)', fontSize: 35, fontWeight: 'bold' }}>R$ 10.000,00</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
        horizontal={true} 
        style={styles.cards}
        showsHorizontalScrollIndicator={false}
        >

          <TouchableOpacity style={styles.fundocards}>
            <Text style={{ color: 'rgba(120,55,254,1)', fontSize: 35, fontWeight: 'bold' }}>R$ 10.000,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fundocards}>
            <Text style={{ color: 'rgba(120,55,254,1)', fontSize: 35, fontWeight: 'bold' }}>R$ 10.000,00</Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.fundocards}>
            <Text style={{ color: 'rgba(120,55,254,1)', fontSize: 35, fontWeight: 'bold' }}>R$ 10.000,00</Text>
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.verificarConta}>

          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(153,96,249,1)', 'rgba(120,55,254,1)']}
            style={styles.fundoVerificarConta}>
            <TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'padding' }}>Verificar Suas {'\n'}Contas Bancárias</Text>
            </TouchableOpacity>

          </LinearGradient>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  headerGradient: {
    width: '100%',
    height: '20%',
    padding: 20,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  imgPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  textoentrada: {
    color: 'white',
    fontSize: 30,
    marginLeft: 55,
  },
  resumoSaldo: {
    backgroundColor: '#fff',
    width: '80%',
    height: '50%',
    alignItems: 'center',
    top: -50,
    borderRadius: 30,
    padding: 20,

    shadowColor: 'black',
    shadowOpacity: 8.9,
    shadowRadius: 8,
    elevation: 5
  },
  fundocards: {
    backgroundColor: 'white',
    width: 250,
    height:150,
    padding: 10,
    borderRadius: 20,
    margin:10,

    shadowColor: 'black',
    shadowOpacity: 8.9,
    shadowRadius: 8,
    elevation: 5
  },
  cards: {
    width: '100%',
    height: 100,
    width: "100%",
    top: -35,
  },
  fundoVerificarConta: {
    borderRadius: 30,
    paddingLeft: 50,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    top: -50,

    shadowColor: 'black',
    shadowOpacity: 8.9,
    shadowRadius: 8,
    elevation: 5
  },
  verificarConta: {
    width: '80%',
    height: '18%'
  },


});
