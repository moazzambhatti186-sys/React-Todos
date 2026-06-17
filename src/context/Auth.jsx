import { createContext, useContext, useState, useEffect } from "react"


const Auth = createContext()
const AuthContext = ({children}) => {

  const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(false)


    useEffect(
        () => {
            const user = JSON.parse(localStorage.getItem("user"))
            if (user) {
                setUser(user)
                setIsAuth(true)
            }
        },[]
    )

    const handleLogout = () => {
        localStorage.removeItem('user')
        setIsAuth(false)
        setUser({})
    }


  return (
    <Auth.Provider value={{isAuth, setIsAuth, user, setUser, handleLogout}}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext

export const useAuthContext = () => useContext(Auth)
