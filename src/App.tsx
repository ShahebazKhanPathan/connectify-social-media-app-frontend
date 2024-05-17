import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./components/LeftSideBar";
import { Outlet } from "react-router-dom";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
      <GridItem></GridItem>
      <GridItem colSpan={2}>
        <LeftSideBar />
      </GridItem>
      <GridItem colSpan={5}>
        <Outlet/>
      </GridItem>
      <GridItem colSpan={3}>
        <RightSideBar/>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  )
}

export default App
