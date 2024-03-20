import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { router } from 'expo-router';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';

const DURATION = 1000;

const endOnJS = () => {
  setTimeout(() => {
    router.push('/(tabs)/')
  }, 1000);
}


const Triangle = () => {
  const translateY = useSharedValue(0);
  const color = useSharedValue(0);

  const config = {
    duration: DURATION,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const styleAnimated = useAnimatedStyle(() => ({
    transform: [
      { rotate: "90deg" },
      { scale: .3 },
      { translateY: withTiming(translateY.value, config) }
    ],
    borderBottomColor: interpolateColor(
      color.value,
      [0, 1],
      ['white', 'black']
    )
  }));

  useEffect(() => {
    translateY.value += 500;
    color.value = withTiming(1 - color.value, { duration: 1000 });
  }, [])

  return <Animated.View style={[styles.triangle, styleAnimated]} />;
};

export const SplashScreen = () => {

  const height = useSharedValue(60);
  const width = useSharedValue(100);
  const radius = useSharedValue(16)

  const progressWidth = useSharedValue(0);

  const config = {
    duration: DURATION,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const styledAnimated = useAnimatedStyle(() => ({
    height: height.value,
    width: withTiming(width.value, config, (isFinished => {
      if (isFinished) progressWidth.value = 260
    })),
    borderRadius: withTiming(radius.value, config)
  }))

  const styledProgressAnimated = useAnimatedStyle(() => ({
    width: withTiming(progressWidth.value, config, () => {
      runOnJS(endOnJS)()
    })
  }))

  useEffect(() => {
    height.value = 10
    width.value = 260
    radius.value = 0
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, styledAnimated]}>
        <Animated.View style={[styles.progress, styledProgressAnimated]} />
        <Pressable onPress={() => router.navigate('/(tabs)/')}>
          <Triangle />
        </Pressable>
      </Animated.View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 80,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'red',
    height: 100,
    width: 100,
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'gray',
    width: 0,
    height: 10
  }
});
