import { Box, Flex, Heading, Spacer, ButtonGroup, Button, Avatar, AbsoluteCenter, HStack, Center } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
const NavBar = () => {
    return (
        <Flex
            gap='2'
            alignItems='center'
            mb={8}
            p={8}
        >
            <Flex>
                <Center>
                    <Avatar p='2' src='https://avatars.githubusercontent.com/u/87979171?v=4'></Avatar>
                    <Heading size='lg'>INMD1</Heading>
                </Center>
            </Flex>
            <Spacer />
            <HStack>
                <Heading size='lm'>Info</Heading>
                <Heading size='lm'>Project</Heading>
                <Heading size='lm'>Blog</Heading>
                <Heading size='lm'>Amview</Heading>
            </HStack>
            <Spacer />
            <HStack p={2}>
                <AddIcon boxSize={5} />
            </HStack>
        </Flex>
    )
}

export default NavBar