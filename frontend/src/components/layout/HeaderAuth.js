import {
    Box,
    Flex,
    HStack,
} from '@chakra-ui/react'

export default function HeaderAuth() {
    return (
        <>
            <Box bgColor={'black'} textColor={'white'} fontWeight={'bold'} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>ChatUtopia</Box>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}