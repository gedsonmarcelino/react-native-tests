import { Text, View } from "react-native";
import { Image } from "expo-image"

import IconFontAwesome from '@expo/vector-icons/FontAwesome6';

import ImgLogo from '@/assets/images/logo.png';
import { styles } from "./styles";

const ICON_SIZE = 28

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={ImgLogo} style={styles.logoImage} />
      </View>
      <IconFontAwesome style={styles.icon} name="display" size={ICON_SIZE} />
      <IconFontAwesome style={styles.icon} name="bell" size={ICON_SIZE} />
      <IconFontAwesome style={styles.icon} name="magnifying-glass" size={ICON_SIZE} />
    </View>);
}
