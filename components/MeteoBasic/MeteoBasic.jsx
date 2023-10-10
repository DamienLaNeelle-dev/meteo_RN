import { View, Image, TouchableOpacity } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ onPress, temperature, city, interpretation }) {
  return (
    <>
      <Txt>{city}</Txt>

      <Txt style={s.label}>{interpretation.label}</Txt>

      <View style={s.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.img} source={interpretation.image} />
      </View>
    </>
  );
}
