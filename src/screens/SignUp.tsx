import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Heading, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >

            <VStack flex={1} bg='gray.700' px={10} pb={16}>
                <Image
                    source={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                    defaultSource={BackgroundImg}
                />
                {/* <Center my={24} >
                <Text color='gray.100' fontSize='sm'>
                    Treine sua mente e o seu corpo
                    </Text>
                </Center> */}

                <Center>

                    <Heading color='gray.100' mb={6} mt='72' fontSize='xl' fontFamily='heading'>
                        Crie sua conta
                    </Heading>
                    <Input
                        placeholder="Nome:"
                    />
                    <Input
                        placeholder="Email:"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha:"
                        secureTextEntry
                    />
                    <Input
                        placeholder="Confirmar Senha:"
                        secureTextEntry
                    />
                    <Button title="Criar e acessar" />
                </Center>

                <Center mt={6}>


                    <Button
                        onPress={handleGoBack}
                        title="Voltar para login"
                        variant='outline' />

                </Center>
            </VStack>
        </ScrollView>
    )
}