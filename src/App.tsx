import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./components/LeftSideBar";
import { Navigate, Outlet } from "react-router-dom";
import RightSideBar from "./components/RightSideBar";
import { signOut, expiry } from "./utils/common";

// Get token
const token = localStorage.getItem("auth-token");

function App() {

  const isExpired = expiry();

  if (!isExpired || !token) {
    return <Navigate to={"/signin"} />;
  }
  else {
    return (
      <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
        <GridItem></GridItem>
        <GridItem colSpan={2}>
          <LeftSideBar onLogOut={() => signOut()} />
        </GridItem>
        <GridItem colSpan={5}>
          <Outlet />
        </GridItem>
        <GridItem colSpan={3}>
          <RightSideBar />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    );
  }
}

export default App
