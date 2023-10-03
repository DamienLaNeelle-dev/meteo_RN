import { View, Image } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <Txt>{city}</Txt>

      <Txt style={s.label}>{interpretation.label}</Txt>

      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.img} source={interpretation.image} />
      </View>
    </>
  );
}
