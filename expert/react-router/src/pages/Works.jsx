import { Link, useParams } from "react-router-dom"


function Works() {
    const { id } = useParams();   
    console.log('상세페이지', id); 

    const data = [
        {id :1, todo : "리액트 배우기"},
        {id :2, todo : "노드 배우기"},
        {id :3, todo : "자바스크립트 배우기"},
        {id :4, todo : "넥스트 배우기"},
        {id :5, todo : "HTTP 프로토콜 배우기"},
    ]

    // console.log(location.pathname.slice(1))

  return (
    <>
        {data.map((item)=>{
            return (
                <div key={item.id}>
                    <Link to={`/works/${item.id}`} ><h3>{item.todo}</h3></Link>
                </div>
            )
        })}
    </>
  )
}

export default Works