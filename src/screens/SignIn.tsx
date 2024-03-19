import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
    email: string
    password: string
}

const signUpSchema = yup.object({
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve conter pelo menos 6 dígitos.'),
})

export function SignIn() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const handleNewAccount = () => {
        navigation.navigate('signUp')
    }

    const handleSignIn = ({ email, password }: FormDataProps) => {
        console.log({ email, password })

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
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (

                            <Input
                                placeholder="Email:"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (

                            <Input
                                placeholder="Password"
                                secureTextEntry

                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
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