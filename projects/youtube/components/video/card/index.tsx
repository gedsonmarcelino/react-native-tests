import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/FontAwesome6"
import { TCard } from "./card";

type CardProps = {
  card: TCard
}

export function Card({ card }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: card.image }} style={styles.image} />
      </View>
      <View style={styles.header}>
        <Image source={{ uri: card.profile }} style={styles.profile} />
        <View>
          <Text style={styles.title}>
            {card.title}
          </Text>
          <Text style={styles.subtitle}>
            {card.channel} * {card.views} * {card.views}
          </Text>
        </View>
        <Icon name="ellipsis-vertical" size={26} />
      </View>
    </View>
  );
}
