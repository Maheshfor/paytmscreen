import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import user from './user.png';
import information from './information.png';
import bell from './bell.png';
import barcode from './barcode.png';
import monthlybill from './monthlybill.png';
import electricity from './electricity.png';
import gas from './gas.png';
import criditcard from './criditcard.png';
import dish from './dish.png';
import car from './car.png';
import movie from './movie.png';
import flight from './flight.png';
import recharge from './recharge.png';



export default function Paytmhome(props) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#4b2b80'} />
      <View style={styles.header}>
        <Image source={user} style={styles.userIcon} />
        <View>
          <Text style={styles.headerText}>Paytm</Text>
        </View>

        <View style={styles.rightWrap}>
          <Image style={styles.rightIcon} source={barcode}></Image>
          <Image style={styles.rightIcon} source={bell}></Image>
          <Image style={styles.rightIcon} source={information}></Image>
        </View>

      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#fff',
          marginTop: 5
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: "bold",
            fontColor: "black"
          }}>Featured</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          padding: 15,
          flexWrap: "wrap",
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: '#fff'
        }}>

          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={monthlybill} />
            <Text style={styles.featureTxt}>Monthly Bill</Text>
          </View>
          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={electricity} />
            <Text style={styles.featureTxt}>electricity</Text>
          </View>
          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={gas} />
            <Text style={styles.featureTxt}>Gas Bill</Text>
          </View>
          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={criditcard} />
            <Text style={styles.featureTxt}>Cridit Card</Text>
          </View>
          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={recharge} />
            <Text style={styles.featureTxt}>Recharge</Text>
          </View>
          <View style={styles.featureTransferItem}>
            <Image style={styles.featureIcon} source={dish} />
            <Text style={styles.featureTxt}>DTH</Text>
          </View>
        </View>
        <View style={{
          marginTop: 5
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: "bold",
            fontColor: "black"
          }}>Recommended</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          padding: 15,
          flexWrap: "wrap",
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={styles.recommendedItemTex}>
            <Text style={styles.featureTxt}>Book{"\n"} your {"\n"}Car</Text>
          </View>
          <View style={styles.recommendedItemImg}>
            <Image style={styles.featureIcon} source={car} />
          </View>
          <View style={styles.recommendedItemTex}>
            <Text style={styles.featureTxt}>book{"\n"} your{"\n"} train</Text>
          </View>
          <View style={styles.recommendedItemImg}>
            <Image style={styles.featureIcon} source={car} />
          </View>
          <View style={styles.recommendedItemTex}>
            <Text style={styles.featureTxt}>Book{"\n"} your{"\n"} flight</Text>
          </View>
          <View style={styles.recommendedItemImg}>
            <Image style={styles.featureIcon} source={flight} />
          </View>
          <View style={styles.recommendedItemTex}>
            <Text style={styles.featureTxt}>book{"\n"} your{"\n"} movie</Text>
          </View>
          <View style={styles.recommendedItemImg}>
            <Image style={styles.featureIcon} source={movie} />
          </View>

        </View>

        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            fontColor: "black"
          }}>Shop on Mall</Text>
        </View>

        <View style={{ padding: 20 }}>
          <ScrollView style={{}} horizontal={true}>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={monthlybill} />
              <Text style={styles.featureTxt}>Monthly Bill</Text>
            </View>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={electricity} />
              <Text style={styles.featureTxt}>electricity</Text>
            </View>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={gas} />
              <Text style={styles.featureTxt}>Gas Bill</Text>
            </View>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={criditcard} />
              <Text style={styles.featureTxt}>Cridit Card</Text>
            </View>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={recharge} />
              <Text style={styles.featureTxt}>Recharge</Text>
            </View>
            <View style={styles.featureTransferItem}>
              <Image style={styles.featureIcon} source={dish} />
              <Text style={styles.featureTxt}>DTH</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>


    </View >


  );
}

const styles = StyleSheet.create({
  featureTransferItem: {
    justifyContent: 'center',
    width: 100,
  },
  featureTransferItem: {
    justifyContent: 'center',
    width: 100,
  },
  userIcon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  featureIcon: {
    height: 100,
    width: 100,
  },
  featureTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,

  },
  recommendedItemImg: {
    height: 120,
    width: 120,
  },
  header: {
    backgroundColor: '#87CEEB',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  rightWrap: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  leftWrap: {
    flexDirection: 'row',
  },
  rightIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 6,
  },
  headerText: {
    color: 'black',
    fontSize:30,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    marginLeft:80
  },
});