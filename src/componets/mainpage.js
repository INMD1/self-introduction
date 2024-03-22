import { Center, Heading, Image, Card, Grid, GridItem } from "@chakra-ui/react";

function mainpage() {
  return (
    //반응형 적용
    <div
      class="h-full flex grid justify-items-stretch  md:grid-flow-col lg:grid-rows-3 gap-8 pt-10"
      style={{ padding: "10%", backgroundColor: "#F8F1F1" }}
    >
       <div className="col-span-3 lg:col-span-4 lg:row-span-3 order-3 sm:order-none">
        <Card>
          <div className="p-10">
            <Heading size="2xl">Hello World!</Heading>
            <Heading size="lg">여러분들 반가워요!_</Heading>
          </div>
        </Card>
      </div>
      <div class="lg:row-span-2 col-span-3 order-1 sm:order-none">
        <Center>
          <Image
            className=" rounded-full w-auto h-40  md:h-80"
            src="./logo.png"
          />
        </Center>
      </div>
      <div className="col-span-3 order-2 sm:order-none">
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem className="w-full sm:h-20 md:h-40" bg="blue.500" />
          <GridItem className="w-full sm:h-20 md:h-40" bg="blue.500" />
          <GridItem className="w-full sm:h-20 md:h-40" bg="blue.500" />
        </Grid>
      </div>
    </div>
  );
}

export default mainpage;
