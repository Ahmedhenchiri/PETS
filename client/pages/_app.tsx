import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import StateHooksComponent from '../components/StateHooksComponent.jsx';
import { useState,createContext } from "react"
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
const UserContext = createContext<string>("")
export default function App({ Component, pageProps }: AppProps) {
  const [user,setUser] = useState("Ahmed henchiri")
  return (
   <UserContext.Provider value={user}>  
    <Layout>
  <Component {...pageProps } />
  </Layout>
  </UserContext.Provider>

  )
  
}
