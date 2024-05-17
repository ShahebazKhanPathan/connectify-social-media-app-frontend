import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./LeftSideBar";
import { Outlet, redirect } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        redirect("/feed");
    });

    return (
        <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
            <GridItem></GridItem>
            <GridItem colSpan={2}>
                <LeftSideBar />
            </GridItem>
            <GridItem colSpan={5}>
                <Outlet/>
            </GridItem>
            <GridItem>
            </GridItem>
            <GridItem></GridItem>
        </Grid>
    )
}

export default Home;