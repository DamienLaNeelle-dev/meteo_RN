import { View, Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

const Txt = ({ children, style }) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  // console.log(1 / height);
  return (
    <View>
      <Text style={[s.text, style, { fontSize: fontSize * 0.00123 * height }]}>
        {children}
      </Text>
    </View>
  );
};

export default Txt;
