import {
    Box,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react'

export default function FooterAuth() {
    return (
        <Box
            pos="relative" bottom="-170" 
            bgColor={'black'} textColor={'white'}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2023 ChatUtopia</Text>
            </Container>
        </Box>
    )
}