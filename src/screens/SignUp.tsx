import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Heading, ScrollView, Text } from "native-base";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";

import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve conter pelo menos 6 dígitos.'),
    confirmPassword: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere')
})

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleSignUp = async ({ name, email, password }: FormDataProps) => {
        const response = await fetch('http://10.0.0.104:3333/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json()
        console.log(data)

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
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome:"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}

                            />
                        )}
                    />


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
                                placeholder="Senha:"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />

                        )}
                    />
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Confirmar Senha:"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.confirmPassword?.message}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                            />

                        )}
                    />


                    <Button
                        onPress={handleSubmit(handleSignUp)}
                        title="Criar e acessar" />
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