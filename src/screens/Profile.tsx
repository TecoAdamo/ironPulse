import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from "native-base";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { FileInfo } from "expo-file-system";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false)
    const [userPhoto, setUserPhoto] = useState('https://github.com/TecoAdamo.png')

    const toast = useToast()

    const handleUserPhotoSelected = async () => {
        setPhotoIsLoading(true)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            })
            if (photoSelected.canceled) {
                return;
            }
            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo
                if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        title: 'Essa imagem é muito grande. Escolha uma deaté 5 MB.',
                        placement: 'top',
                        bgColor: 'red.500'
                    })
                } else {
                    setUserPhoto(photoSelected.assets[0].uri)
                    return toast.show({
                        title: 'Foto atualizada com sucesso.',
                        placement: 'top',
                        bgColor: 'green.500'
                    })
                }
            }

        } catch (error) {
            console.log(error)
        } finally {
            setPhotoIsLoading(false)
        }
    }

    const PHOTO_SIZE = 33
    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>

                    {photoIsLoading ?
                        <Skeleton
                            w={PHOTO_SIZE}
                            h={PHOTO_SIZE}
                            rounded='full'
                            startColor='gray.500'
                            endColor='gray.400'
                        />
                        :
                        <UserPhoto
                            size={PHOTO_SIZE}
                            alt="Foto do usuário"
                            source={{ uri: userPhoto }}
                        />}
                    <TouchableOpacity onPress={handleUserPhotoSelected}>
                        <Text
                            color='green.500'
                            fontWeight='bold'
                            fontSize='md'
                            mt={2}
                            mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>
                    <Input
                        placeholder="Nome"
                        bg='gray.600'
                    />
                    <Input
                        placeholder="Email:"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        bg='gray.600'
                        isDisabled
                    />

                </Center>
                <VStack px={10} mt={12} mb={9}>
                    <Heading color='gray.200' fontSize='md' mb={2} >
                        Alterar senha
                    </Heading>
                    <Input
                        placeholder="Senha antiga"
                        secureTextEntry
                        bg='gray.600'
                    />
                    <Input
                        placeholder="Senha atual"
                        secureTextEntry
                        bg='gray.600'
                    />
                    <Input
                        placeholder="Confirme nova senha"
                        secureTextEntry
                        bg='gray.600'
                    />
                    <Button title="Atualizar" mt={4} />
                </VStack>
            </ScrollView>

        </VStack>
    )
}
