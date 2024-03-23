import { Center, Heading, Image, Card, Grid, GridItem } from "@chakra-ui/react";

function mainpage() {
  return (
    <div
      className="h-full flex grid justify-items-stretch lg:grid-flow-col grid-rows-9 sm:grid-rows-4 gap-8 pt-10"
      style={{ padding: "10%", backgroundColor: "#F8F1F1" }}
    >
      <div className="col-span-3 lg:col-span-4 row-span-3 order-3 sm:order-none">
        <Card>
          <div className="p-10">
            <Heading size="2xl">Hello World!</Heading>
            <Heading size="lg">여러분들 반가워요!_</Heading>
          </div>
        </Card>
      </div>
      <div className="row-span-2 col-span-3 order-1 pt-10 sm:order-none sm:pt-0">
        <Center>
          <Image
            className="rounded-full w-auto h-56  md:h-80"
            src="./logo.png"
          />
        </Center>
      </div>

      <div className="hidden sm:block">test</div>

      <div className="col-span-3 order-2 sm:order-none">
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem className="w-full md:h-40 sm:h-20 " bg="blue.500" />
          <GridItem className="w-full md:h-40 sm:h-20" bg="blue.500" />
          <GridItem className="w-full md:h-40 sm:h-20" bg="blue.500" />
        </Grid>
      </div>
    </div>
  );
}

export default mainpage;
