import { Button, Text, View } from "react-native";

import { RootStackScreenProps } from "../../navigation";

type Props = RootStackScreenProps<"Welcome">;

export const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={{ backgroundColor: "blue" }}>Welcome</Text>
      <Button
        title="Email login"
        onPress={() => navigation.navigate("EmailLogin")}
      />
    </View>
  );
};
