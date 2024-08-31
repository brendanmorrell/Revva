import { Pressable, Text, View } from 'react-native'
import { styled } from 'nativewind'
import { StyledComponent } from 'nativewind'

import { useColorScheme } from 'nativewind'

function MyComponent() {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <>
      <Text onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
        {`The color scheme is ${colorScheme}`}
      </Text>
      <Text tw={colorScheme === 'dark' ? 'text-red-500' : 'text-blue-500'}>SCHEME BASED TEXT.</Text>
    </>
  )
}

const StyledText = styled(Text, 'bg-red-700')

export default function ToDo() {
  return (
    <View>
      <Pressable onPress={() => console.log('pressed')}>
        <Text>Press me</Text>
      </Pressable>
      <StyledComponent component={Text} tw="font-bold">
        Styled Component Usage
      </StyledComponent>

      <StyledText tw="bg-red-700">Bold Text</StyledText>
      <Text tw="font-bold">Hello world.</Text>
      <Text className="bg-red-700">Hello world.</Text>

      <View className="rotate-180">
        <Text className="bg-red-700">Open up App.js to start working on your app!</Text>
      </View>
      <MyComponent />
      <StyledText
        className={`
        ios:text-red-500
        android:text-blue-500
        web:text-green-600
      `}
      >
        Text color changes per Platform! 🎉
      </StyledText>
    </View>
  )
}
