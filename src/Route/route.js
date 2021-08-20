import React,{useState,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/Home/home';
import DetailsScreen from '../Screen/Details/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../Screen/Map/map';
import ProfileScreen from '../Screen/Profile/profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../context';
import { ActivityIndicator, View } from 'react-native';
import ProductsScreen from '../Screen/Products/products';
import { firebaseApp } from '../configFireBase/firebaseConfig';
import AuthStackScreen from './AuthStack';

const StackHome = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

{/**
const RootStackScreen =()=>{
  <RootStack.Navigator>
    <RootStack.Screen name='Auth' component={AuthStackScreen}/>
    <RootStack.Screen name='App' component={DrawerScreen}/>
  </RootStack.Navigator>
}
*/}

const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);
const DrawerScreen = () => (
  <Drawer.Navigator drawerType = "front"
    hideStatusBar={false}
    edgeWidth={100}
    screenOptions = {{
    headerShown: true,
    headerTitleAlign:'center',
    swipeEnabled: false,
    headerStyle:{
      backgroundColor: '#0080ff'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  }}
  drawerStyle={{width: 200, backgroundColor:'yellow'}}
  >
    <Drawer.Screen name="Home" component={TabScreen} options={{headerShown:true}}
    />
    <Drawer.Screen name="Products" component={ProductsScreen}/>
  </Drawer.Navigator>
);


const TabScreen = () => (
  <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 30 : 20;
            } else if (route.name === 'Map') {
              iconName = 'map-marked-alt';
              size = focused ? 30 : 20;
            }
            else if(route.name === 'Profile')
            {
                iconName = 'user-circle';
                size = focused ? 30 : 20;
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: true,
          labelStyle: {fontSize: 15}
        }}
        >
          <Tab.Screen name="Home" component={StackHomeScreen}/>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
);

function StackHomeScreen(){
  return(
    <StackHome.Navigator headerMode="none">
      <StackHome.Screen name="Home" component={HomeScreen} />
      <StackHome.Screen name="Details" component={DetailsScreen} />
    </StackHome.Navigator>
  )
  }

function Route() {
{/**
  const [user, setUser] = useContext(AuthContext);
  const [initialzing, setInitialzing] = useState(true);
  const isLoading = false;

  React.useEffect(() => {
    const subscriber = firebaseApp.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged =(user)=>{
    setUser(user);
    if(initialzing) setInitialzing(false);
  }
  
  if(initialzing) return null;

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{justifyContent: 'center', alignItems:'center'}} />;
  }
  return(
    <AuthContext.Provider>
      <NavigationContainer>
      {user? <AuthStackScreen/> : <DrawerScreen/>}
        <RootStackScreen/>
      </NavigationContainer>
    </AuthContext.Provider>
    
    
  );
 */}
 const [userToken, setUserToken] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoading(false);
        setUserToken('abc');
      },
      signUp: () => {
        setLoading(false);
        setUserToken('abc');
      },
      signOut: () => {
        setLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
  
}
export default Route;


  
    

