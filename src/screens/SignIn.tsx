import { useNavigation } from "@react-navigation/native";

import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const handleNewAccount = () => {
        navigation.navigate('signUp')
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

                    <Heading color='gray.100' mb={6} mt='80' fontSize='xl' fontFamily='heading'>
                        Acesse sua conta
                    </Heading>
                    <Input
                        placeholder="Email:"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                    />
                    <Button title="Acessar" />
                </Center>

                <Center mt={24}>
                    <Text
                        color='gray.100'
                        fontSize='sm'
                        mb={3}
                        fontFamily='body'
                    >Ainda não tem acesso?</Text>

                    <Button
                        onPress={handleNewAccount}
                        title="Criar conta"
                        variant='outline' />

                </Center>
            </VStack>
        </ScrollView>
    )
}