import { View, Text } from "react-native";
import { s } from "./Txt.style";

const Txt = ({ children, style }) => {
  return (
    <View>
      <Text style={[s.text, style]}>{children}</Text>
    </View>
  );
};

export default Txt;
