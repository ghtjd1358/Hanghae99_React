import { Outlet } from "react-router-dom"


function DashBoardLayout() {
  return (
    <>
        <h1>대쉬보드!</h1>
        <Outlet/>
    </>  )
}

export default DashBoardLayout