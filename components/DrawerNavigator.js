import { createDrawerNavigator, createAppContainer } from "react-navigation";

import SettingsScreen from "./screens/SettingsScreen";
import FAQScreen from "./screens/FAQScreen";
 import StackNavigator from "./StackNavigator";
export default AppNavigator = createDrawerNavigator(
  {
    Menu: StackNavigator,
    Settings:SettingsScreen,
    FAQ:FAQScreen
  }
);
