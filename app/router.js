import { createStackNavigator, createAppContainer} from "react-navigation";
import Beranda from "./screens/Beranda";
import TentangKami from "./screens/TentangKami";

//Register screen ke react-navigation
const AppNavigator = createStackNavigator(
    {
        Beranda: {
            screen: Beranda,
        },
        TentangKami: {
            screen: TentangKami,
        },
    },
    {
    //Default screen ketika apps aktif
    initialRouteName: "Beranda",
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#2b8be7"
        },
        headerTintColor:"#FFF",
        headerTitleStyle:{
            fontWeight: 'bold',        }
    }
    }
);

//Export navigator
export default (AppContainer = createAppContainer(AppNavigator));