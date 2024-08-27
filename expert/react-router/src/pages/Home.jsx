import { useNavigate } from "react-router-dom"



function Home() {
    const navigate = useNavigate();

  return (
    <>
        <h1>Home</h1>
        <button onClick={()=>navigate('/works')}>
            works로 이동
        </button>
    </>
  )
}

export default Home