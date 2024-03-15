import { HStack, VStack, Heading, Text, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";

import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
    return (
        <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
            <UserPhoto
                mr={4}
                borderColor='green.500'
                size={16}
                alt="Imagem do usuário"
                source={{ uri: 'https://github.com/TecoAdamo.png' }}
            />
            <VStack flex={1}>
                <Text color='gray.100' fontSize='md'>
                    Olá
                </Text>
                <Heading color='gray.100' fontSize='md'>
                    Mateus
                </Heading>

            </VStack>
            <TouchableOpacity>
                <Icon
                    as={Ionicons}
                    name="log-out-outline"
                    color='gray.200'
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}
