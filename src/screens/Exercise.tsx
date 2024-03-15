import { HStack, Heading, Icon, VStack, Text, Image, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Button } from "@components/Button";


export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <VStack flex={1}>
            <ScrollView>

                <VStack px={8} bg='gray.600' pt={12}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Icon
                            as={Ionicons} name="arrow-back-outline"
                            color='green.500'
                            size={6}
                        />
                    </TouchableOpacity>
                    <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center' >
                        <Heading flexShrink={1} color='gray.100' fontSize='lg'>
                            Puxada frontal
                        </Heading>
                        <HStack alignItems='center'>
                            <Icon
                                as={Ionicons}
                                name="body-outline"
                            />
                            <Text color='gray.200' ml={1} textTransform='capitalize'>
                                Costas
                            </Text>
                        </HStack>
                    </HStack>
                </VStack>
                <VStack p={8}>
                    <Image
                        w='full'
                        h={80}
                        source={{ uri: 'https://static.tuasaude.com/media/article/ll/ae/puxada-frontal_63648_l.jpg' }}
                        alt="Nome do exercício"
                        mb={3}
                        resizeMode='cover'
                        rounded='lg'
                    />
                    <Box bg='gray.600' rounded='md' pb={4} px={4}>
                        <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
                            <HStack>
                                <Icon
                                    as={Ionicons}
                                    name="barbell-outline"
                                    color='green.700'
                                />
                                <Text color='gray.200' ml={2}>
                                    3 séries
                                </Text>
                            </HStack>
                            <HStack>
                                <Icon
                                    as={Ionicons}
                                    name="repeat-outline"
                                    color='green.700'
                                />
                                <Text color='gray.200' ml={2}>
                                    12 repetições
                                </Text>
                            </HStack>
                        </HStack>
                        <Button title="Marcar como realizado" />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}