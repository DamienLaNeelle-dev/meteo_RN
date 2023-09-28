import { View, Image } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({}) {
  return (
    <>
      <View>
        <Txt>Clock</Txt>
      </View>

      <Txt>City</Txt>

      <Txt>Label</Txt>

      <View>
        <Txt>3°</Txt>
        <Image />
      </View>
    </>
  );
}
