import { Image, HStack, VStack, Heading, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableHighlightProps } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

type Props = TouchableHighlightProps & {

}

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image
                    source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/03/rosca-direta.jpg' }}
                    alt="Imagem do exerício"
                    w={16}
                    h={16}
                    rounded='sm'
                    mr={4}
                    resizeMode='cover'
                />
                <VStack flex={1}>
                    <Heading color='white' fontSize='lg'>
                        Bíceps
                    </Heading>
                    <Text color='gray.200' fontSize='sm' mt={1} numberOfLines={2}>
                        3 séries x  12 repetições

                    </Text>
                </VStack>
                <Icon as={Ionicons} name="chevron-forward-outline" color='gray.300' />
            </HStack>
        </TouchableOpacity>
    )
}