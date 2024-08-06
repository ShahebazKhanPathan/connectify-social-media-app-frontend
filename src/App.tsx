import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./components/LeftSideBar";
import { Navigate, Outlet } from "react-router-dom";
import RightSideBar from "./components/RightSideBar";
import { useState } from "react";
import { logOut, checkTokenExpiry } from "./utils/common";

const token = localStorage.getItem("auth-token");

function App() {

  const [isToken, setToken] = useState(false);

  if (!token) {
    return <Navigate to={"/signin"} />;
  }
  else {
    checkTokenExpiry(token).then(() => setToken(true)).catch(() => setToken(false));

    if (isToken) {
      return (
        <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
          <GridItem></GridItem>
          <GridItem colSpan={2}>
            <LeftSideBar onLogOut={() => { logOut(token).then(() => setToken(true)).catch(() => setToken(false)) }} />
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
}

export default App
