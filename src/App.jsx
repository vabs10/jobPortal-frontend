import { useState } from 'react'
import { Button } from "./components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import './App.css'
import { Terminal } from 'lucide-react'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


     {/* <Login></Login> */}
     <SignUp></SignUp>
 
    </>
  )
}

export default App
