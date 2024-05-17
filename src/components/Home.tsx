import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./LeftSideBar";

const Home = () => {
    return (
        <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
            <GridItem></GridItem>
            <GridItem colSpan={2}>
                <LeftSideBar />
            </GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem></GridItem>
        </Grid>
    )
}

export default Home;