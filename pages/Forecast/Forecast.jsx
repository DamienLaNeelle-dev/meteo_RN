import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./Forecast.style";
import Txt from "../../components/Txt/Txt";
import { Container } from "../../components/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";

const Forecast = ({}) => {
  const { params } = useRoute();
  const nav = useNavigation();

  const backButton = (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <Txt> {"<"} </Txt>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
  return <Container>{header}</Container>;
};

export default Forecast;
