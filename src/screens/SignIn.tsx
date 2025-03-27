import { VStack, Image } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        h={624}
        w="$full"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        position="absolute"
      />
    </VStack>
  );
}
