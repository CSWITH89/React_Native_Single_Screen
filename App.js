import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Card from './src/components/Card';
import Header from './src/components/Header';
import HeaderBtn from './src/components/HeaderBtn';
import MainScreen from './src/screens/MainScreen';
import BodyView from './src/components/BodyView';
import PrimaryText from './src/components/PrimaryText';
import BadgeView from './src/components/BadgeDraw';
import Badge from './src/components/Badge';
import SecondaryText from './src/components/SecondaryText';
import CardScroll from './src/components/CardScroll';
import BotNavbar from './src/components/BotNavbar';

const Stack = createStackNavigator();


export default function App() {
  return (
    

    <View style={styles.container}>
      <Header>
          <HeaderBtn active={true} title="Recipes"></HeaderBtn>
          <HeaderBtn title="Meal Plan"></HeaderBtn>
      </Header>
      <BodyView>
        <PrimaryText text="Your daily target" />
        <BadgeView>
          <Badge topText="Calories" botText="900 kcal" color={{backgroundColor: colObj.yellow}}></Badge>
          <Badge topText="Proteins" botText="13 g" color={{backgroundColor: colObj.pink}}></Badge>
          <Badge topText="Carbs" botText="230 g" color={{backgroundColor: colObj.green}}></Badge>
          <Badge topText="Fats" botText="50 g" color={{backgroundColor: colObj.brown}}></Badge>
        </BadgeView>
        <PrimaryText text="Meals" />

        <SecondaryText text="Breakfast"></SecondaryText>
        <CardScroll>
          <Card
            text='Avocado & Toast'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.pink}}
          /> 
          <Card
            text='Egg & Veggies'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.pink}}
          /> 
          <Card
              text='Granola Bowl'
              image={require('./assets/Mask-Group-19.png')}
              color={{backgroundColor: colObj.pink}}
          /> 
        </CardScroll>

        <SecondaryText text="Mains"></SecondaryText>
        <CardScroll>
          <Card
            text='Chicken and Beans'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.yellow}}
          /> 
          <Card
            text='Shrimp Udon'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.yellow}}
          /> 
          <Card
              text='Salmon and Broccoli'
              image={require('./assets/Mask-Group-19.png')}
              color={{backgroundColor: colObj.yellow}}
          /> 
        </CardScroll>

        <SecondaryText text="Snacks"></SecondaryText>
        <CardScroll>
          <Card
            text='Feta Salad'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.offwhite}}
          /> 
          <Card
            text='Lentil Soup'
            image={require('./assets/Mask-Group-19.png')}
            color={{backgroundColor: colObj.offwhite}}
          /> 
          <Card
              text='Fruit Salad'
              image={require('./assets/Mask-Group-19.png')}
              color={{backgroundColor: colObj.offwhite}}
          /> 
        </CardScroll>
      </BodyView>

      <BotNavbar style={{backgroundColor: colObj.pink}}>
        <Ionicons name="md-pulse" size={34} color={colObj.green} />
        <MaterialCommunityIcons name="dumbbell" size={34} color={colObj.green} />
        <MaterialCommunityIcons name="food-apple" size={34} color={colObj.green} />
        <Ionicons name="md-play" size={34} color={colObj.green} />
      </BotNavbar>
  </View> 
  );
}


      


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const colObj = {
  white: "#FFFFFF",
  dgrey: "#808077",
  offwhite: '#EDF3E9',
  lgrey: '#00000029',
  yellow: '#F9D26D',
  pink: '#F5D1C3',
  green: '#5F9595',
  black: '#000000',
  brown: '#A88476',
  white2: '#FFFFFF00',
  white3: '#FFFFFFB3'
}