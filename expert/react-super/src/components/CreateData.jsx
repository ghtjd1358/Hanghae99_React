import { useState } from "react"
import supabase from "../subabaseClient"


function CreateData({setUsers}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')

    const dataForm = {
        name, age, address
    }

    const handlerCreate =  async () => {
        const {data, error} = await supabase.from("NACAMP_SAMPLE").insert([dataForm])
        // console.log('spread id', data.id);

        if(error){
            console.log(error.message);
        }else{
            alert("데이터가 정상적으로 추가되었습니다");
            console.log(data);
            setUsers(prevData => [...prevData, dataForm] )
            
            setName("")
            setAge("")
            setAddress("")
        }
    }


  return (
    <div style={{
        border : "1px solid red",
        padding : "10px"
    }}>
        <h2>데이터 추가 로직</h2>
        <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'center'
        }}>
        이름 : {" "} <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        나이 : {" "} <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
        주소 : {" "} <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/> <br/>
        </div>
        <button onClick={handlerCreate}>등록</button>
    </div>
  )
}

export default CreateData