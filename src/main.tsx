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
import SignInSignUp from './components/SignInSignUp.tsx'

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
    path: "/signup",
    element: <SignInSignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
