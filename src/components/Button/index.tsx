import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

interface ButtonProps {
  text: string;
  backgroundColor: string;
  onPress?: () => void;
}

export function Button({ text, backgroundColor, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
