import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/Tv";
import SearchScreen from "../screens/Search";
import {BG_COLOR} from "../constants/Color";

const TabNavigation = createBottomTabNavigator(
    {
        Movies : MovieScreen,
        TV : TVScreen,
        Search : SearchScreen
    },{
        tabBarOptions:{
            showLabel : false,
            style:{
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);