import React, {useEffect} from 'react';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/Singup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SignIn from './src/screens/auth/Singin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favotires';
import Profile from './src/screens/app/Profile';
import {Image} from 'react-native';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import NewListing from './src/screens/app/NewListing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assests/home-active.png')
            : require('./src/assests/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assests/favorites-active.png')
            : require('./src/assests/favorites.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assests/profile-active.png')
            : require('./src/assests/profile.png');
        }

        return <Image source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey},
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const WEB_CLIENT_ID =
  '96370580845-k5vkdlkf3hps6apth6g7b83s7i9asvgq.apps.googleusercontent.com';
const IOS_CLIENT_ID =
  '96370580845-36i2p6kseri3qpm1c8th3lljsm7mc7md.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      iosClientId: IOS_CLIENT_ID,
      profileImageSize: 120,
    });
  }, []);
  const isSignedIn = true;
  const theme = {
    colors: {
      background: colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NewListing"
                component={NewListing}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
