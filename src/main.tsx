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
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
