import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";

export function Home() {
  function handleParticipantAdd() {
    console.log("Voce clicou no botão de adicionar");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 26 de Setembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <Button
          backgroundColor="#31CF67"
          text="+"
          onPress={handleParticipantAdd}
        />
      </View>

      <Participant />
    </View>
  );
}
