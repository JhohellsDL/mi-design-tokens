import { typography } from "@/src";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View >
      <Text style={typography.ride_sys_text_label_xlarge_default}>
        Hola, este es un ejemplo de texto.
      </Text>
    </View>
  );
}