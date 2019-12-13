import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SplashScreen from "./screens/SplashScreen";
import SelectMode from "./screens/SelectMode";

import ReportScreen from "./screens/ReportScreen";
import QuestionaireScreen from "./screens/QuestionaireScreen";
import RedFlagsScreen  from "./screens/RedFlagsScreen";
import NeedHelpNowScreen  from "./screens/NeedHelpNowScreen";
import SheltersAndResourcesScreen  from "./screens/SheltersAndResourcesScreen";
import FAQScreen  from "./screens/FAQScreen";
import SetPasswordScreen from "./screens/SetPasswordScreen";
import CreateSafetyPlanScreen from "./screens/CreateSafetyPlanScreen";
import Calculator from "./calculator/index";

//import Drawer from "./DrawerNavigator";
//export default AppNavigator = createStackNavigator(
  const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    SelectMode: SelectMode,
    Home: HomeScreen,
    Details: DetailsScreen, 
    Report:ReportScreen,
    Questionaire:QuestionaireScreen,
    RedFlags:RedFlagsScreen,
    NeedHelpNow:NeedHelpNowScreen,
    SheltersAndResources:SheltersAndResourcesScreen,
    FAQ:FAQScreen,
    SetPassword:SetPasswordScreen,
    Calculator:Calculator,
    CreateSafetyPlan:CreateSafetyPlanScreen

    
  },
  {
    initialRouteName: "Splash"
  }
);

AppNavigator.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index == 0) {
    drawerLockMode = 'locked-closed';
  }
  return {
    drawerLockMode,
  };
};
 
export default AppNavigator;