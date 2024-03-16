import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Heading, ScrollView, Text } from "native-base";

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

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>()

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleSignUp = ({ name, email, password, confirmPassword }: FormDataProps) => {
        console.log({ name, email, password, confirmPassword })

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
                        rules={{
                            required: 'Informe o nome.'
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome:"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    <Text color='white'>{errors.name?.message}</Text>

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Informe o email.',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'E-mail inválido'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Email:"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                            />

                        )}
                    />
                    <Text color='white'>{errors.email?.message}</Text>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha:"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
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