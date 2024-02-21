import { createContext } from "react"
import { useActiveID } from "../libs/hooks"

type ActiveIdContextProps = {
    activeID: number | null

  }
  export const ActiveIdContext = createContext<ActiveIdContextProps| null>(null)


  type ActiveIdContextProviserProps ={
      children:React.ReactNode
  }

  export default function ActiveIdContextProvider({children}:ActiveIdContextProviserProps) {

   const activeID = useActiveID()


    return (
      <ActiveIdContext.Provider value={{
        activeID
        }}>{children}</ActiveIdContext.Provider>
    )
  }
