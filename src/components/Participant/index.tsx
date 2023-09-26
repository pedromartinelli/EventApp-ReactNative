import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Pedro Martinelli</Text>
      <Button backgroundColor="#E23C44" text="-" />
    </View>
  );
}
