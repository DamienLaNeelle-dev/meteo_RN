import { s } from "./Container.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import background from "../../assets/background.png";

export function Container({ children }) {
  return (
    <>
      <ImageBackground
        source={background}
        style={s.background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>{children}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
