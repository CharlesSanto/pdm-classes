import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GerenciarDespesa from './screens/GerenciarDespesa'
import DespesaRecente from './screens/DespesaRecentes'
import TodasDespesa from './screens/TodasDespesas'
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';

export default function App() {

const Tab = createBottomTabNavigator()

function BottomTabScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerRight: () => <IconButton icon="add" size={24} onPress={() => {navigation.navigate('GerenciarDespesa')}} />}}>
      <Tab.Screen name="DespesaRecentes" component={ DespesaRecente } 
      options={{tabBarIcon: ({color, size}) => (<Ionicons name="hourglass" 
      size={size} color={color}/>), 
      tabBarLabel: 'Recentes',
      title: 'Despesas Recentes', 
      tabBarLabelStyle: {fontSize: 12} }} />

      <Tab.Screen name="TodasDespesa" component={ TodasDespesa } 
      options={{tabBarIcon: ({color, size}) => (<Ionicons name="wallet-outline" 
      size={size} color={color}/>), 
      tabBarLabel: 'Todas',
      title: 'Todas as Despesas', 
      tabBarLabelStyle: {fontSize: 12} }} />

    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Despesas" component={ BottomTabScreen } options={{headerShown:false}} />
      <Stack.Screen name="GerenciarDespesa" component={ GerenciarDespesa } />
    </Stack.Navigator>

  </NavigationContainer>
)

const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: '#fff', 
  alignItems: 'center',
  justifyContent: 'center'
  },
 }) 
}
