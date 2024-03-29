import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard() {
    return (
        <HStack
            w='full'
            px={5}
            py={4}
            mb={3}
            rounded='md'
            bg='gray.600'
            alignItems='center'
            justifyItems='center'  >
            <VStack mr={5} flex={1}>
                <Heading color='white' fontSize='md' textTransform='capitalize' numberOfLines={1}>
                    Costas
                </Heading>
                <Text color='gray.100' fontSize='lg' numberOfLines={1}>Puxada Frontal</Text>
            </VStack>
            <Text color='gray.300' fontSize='md'>10:45</Text>
        </HStack>
    )
}