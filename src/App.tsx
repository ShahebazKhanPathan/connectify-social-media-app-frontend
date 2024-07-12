import { Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "./components/LeftSideBar";
import { Navigate, Outlet } from "react-router-dom";
import RightSideBar from "./components/RightSideBar";
import apiClient from "./services/apiClient";
import { useEffect, useState } from "react";

const token = localStorage.getItem("auth-token");

function App() {

  const [isToken, setToken] = useState(false);

  const checkTokenExpiry = async () => {
    if (token) {
      await apiClient.get("/api/blacklist", { headers: { "auth-token": localStorage.getItem("auth-token") } })
        .then(() => setToken(true))
        .catch(() => setToken(false));
    }
  };

  const logOut = () => {
    apiClient.delete("/api/blacklist", { data: { token: token } })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.messages));
  };

  useEffect(() => {
    checkTokenExpiry();
  }, []);

  if (isToken) {
    return (
      <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
        <GridItem></GridItem>
        <GridItem colSpan={2}>
          <LeftSideBar onLogOut={() => logOut()} />
        </GridItem>
        <GridItem colSpan={5}>
          <Outlet />
        </GridItem>
        <GridItem colSpan={3}>
          <RightSideBar />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    )
  }
  else {
    return <Navigate to={"/signin"} />;
  }
}

export default App
