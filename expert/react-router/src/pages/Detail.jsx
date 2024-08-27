import { useParams } from "react-router-dom";



function Detail() {   
    const { id } = useParams();   
    console.log('상세페이지', id);

    const data = [
        {id :1, todo : "리액트 배우기"},
        {id :2, todo : "노드 배우기"},
        {id :3, todo : "자바스크립트 배우기"},
        {id :4, todo : "넥스트 배우기"},
        {id :5, todo : "HTTP 프로토콜 배우기"},
    ]

    const findData = data.find((item)=> item.id === parseInt(id));
    console.log(findData)
    

  return (
    <>
    {findData ? (
      <div>{findData.todo}</div>
    ) : (
      <div>항목을 찾을 수 없습니다.</div>
    )}
  </>
  )
}

export default Detail