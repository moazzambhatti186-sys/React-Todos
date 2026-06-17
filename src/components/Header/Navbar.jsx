import { useEffect, useState } from "react"
import { Space } from "antd"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/Auth.jsx"


const Navbar = () => {
    
    // const [user, setUser] = useState({})
    // const [isAuth, setIsAuth] = useState(false)

    const {isAuth,setIsAuth,user, setUser, handleLogout} = useAuthContext()
    useEffect(
        () => {
            const user = JSON.parse(localStorage.getItem("user"))
            if (user) {
                setUser(user)
                setIsAuth(true)
            }
        },[]
    )

    // const handleLogout = () => {
    //     localStorage.removeItem('user')
    //     setIsAuth(false)
    //     setUser({})
    // }


    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand">React Todos</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {
                                !isAuth
                                    ?
                                    <Space>
                                        <Link to='/auth/login' className="btn btn-success">Login</Link>
                                        <Link to='/auth/register' className="btn btn-info">Register</Link>
                                    </Space>
                                    :
                                    <Space>
                                        <Link to='/dashboard/user' className="btn btn-success">Dashboard</Link>
                                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                    </Space>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
