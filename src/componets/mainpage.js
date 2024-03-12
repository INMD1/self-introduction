import { Grid, GridItem, Box, Image, Center } from "@chakra-ui/react";

function mainpage() {
    return (
        <Grid
            h='100vh'
            w="100vw"
            templateColumns='repeat(5, 1fr)'
            gap={6}
        >
            <GridItem rowSpan={2} colSpan={3} bg='tomato' />
            <GridItem colSpan={2} bg='tomato' >
                <Box>
                    <Center>
                        <Image style={{margin: "auto", marginTop: "15vh"}} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Center>
                </Box>
            </GridItem>
            <GridItem colSpan={2} bg='tomato' />
        </Grid>
    )
}

export default mainpage;