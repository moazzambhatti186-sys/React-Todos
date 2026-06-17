import { Route, Routes } from "react-router-dom"
import User from "./User"

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="user" element={<User />} />
      </Routes>
    </>
  )
}

export default Dashboard
