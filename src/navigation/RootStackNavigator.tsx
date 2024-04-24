import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";
import { EmailLoginScreen, WelcomeScreen } from "../screens";

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      {/* auth */}
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="EmailLogin" component={EmailLoginScreen} />

      {/* add more */}
    </RootStack.Navigator>
  );
};
