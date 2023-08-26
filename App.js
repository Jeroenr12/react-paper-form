import {PaperProvider, MD3LightTheme as LightTheme, adaptNavigationTheme,
} from 'react-native-paper';
import {FormScreen} from "./screens/FormScreen";
import {InfoScreen} from "./screens/InfoScreen";
import {NavigationContainer} from "@react-navigation/native";
import {NAV_FORM, NAV_INFO} from "./navigation_constants";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const {navTheme} = adaptNavigationTheme({reactNavigationDark: LightTheme});

function ProvideApp(){
  return(
          <Stack.Navigator>
              <Stack.Screen name={NAV_FORM} component={FormScreen} options={{ headerTitleStyle: {fontWeight: 'bold',},}}/>
              <Stack.Screen name={NAV_INFO} component={InfoScreen} options={{ headerTitleStyle: {fontWeight: 'bold',},}}/>
          </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={LightTheme}>
        <NavigationContainer theme={navTheme}>
            <ProvideApp/>
        </NavigationContainer>
    </PaperProvider>
  );
}
