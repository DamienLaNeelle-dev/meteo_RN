import { View, Text } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoAdvanced.style";

const MeteoAdvanced = ({ dusk, dawn, wind }) => {
  return (
    <View style={s.container}>
      <View style={s.text_container}>
        <Txt style={s.text1}>{dusk}</Txt>
        <Txt style={s.text2}>Aube</Txt>
      </View>
      <View style={s.text_container}>
        <Txt style={s.text1}>{dawn}</Txt>
        <Txt style={s.text2}>Crépuscule</Txt>
      </View>
      <View style={s.text_container}>
        <Txt style={s.text1}>{wind} km/h</Txt>
        <Txt style={s.text2}>Vent</Txt>
      </View>
    </View>
  );
};

export default MeteoAdvanced;
