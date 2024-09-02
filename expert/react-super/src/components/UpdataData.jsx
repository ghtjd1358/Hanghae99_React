import { useState } from "react"
import supabase from "../subabaseClient"


function UpdataData({id, setUsers}) {
    const [address, setAddress] = useState('');
    
    const handlerUpdate = async () => { 
        const {data, error} = await supabase.from("NACAMP_SAMPLE").update({
            address
        }).eq('id', id);

        if(error){
            console.log(error);
        }else{
            alert("데이터가 업데이트 되었습니다.")
            console.log("업데이트 데이터", data)
            setUsers(prevData => prevData.map(item => item.id === id && {...item, address} ))

            setAddress("")
        }
        
    }

    return (
    <div style={{
        border : "5px solid skyblue",
        textAlign : 'left',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }}>
        주소 변경 : {""} <input style={{margin : '5px'}} type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <button onClick={handlerUpdate}>수정</button>

    </div>
  )
}

export default UpdataData