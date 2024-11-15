import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feed from './components/Feed.tsx'
import Notifications from './components/Notifications.tsx'
import Messages from './components/Messages.tsx'
import Chat from './components/Chat.tsx'
import Network from './components/Network.tsx'
import Followers from './components/Followers.tsx'
import Following from './components/Following.tsx'
import Profile from './components/Profile.tsx'
import Post from './components/Post.tsx'
import SignIn from './components/SignIn.tsx'
import SignUp from './components/SignUp.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed/>
      },
      {
        path: "/notifications",
        element: <Notifications/>
      },
      {
        path: "/network",
        element: <Network />,
        children: [
          {
            path: "/network/followers",
            element: <Followers/>
          },
          {
            path: "/network/following",
            element: <Following/>
          }
        ]
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/post",
        element: <Post/>
      }
    ]
  },
  {
    path: "/messages",
    element: <Messages />,
    children: [
      {
        path: "/messages/",
        element: <Chat/>
      }
    ]
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
