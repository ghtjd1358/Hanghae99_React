import { useEffect } from "react"
import supabase from "../subabaseClient"
import DeleteData from "./DeleteData";
import UpdataData from "./UpdataData";


function Fetchdata({users, setUsers}) { 
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from("NACAMP_SAMPLE").select('*');
            if (error) {
                console.error('Supabase error:', error);
            } else if (data.length === 0) {
                console.warn('No data returned from Supabase');
            } else {
                console.log("Data returned from Supabase:", data);
                setUsers(data || []);
            }
        }
        fetchData();
    }, []);
    

  return (
    <>
        {users.map((user)=>{
            const {name, age, address, id} = user
            return (
                <div key={id} style={{ border : "3px solid grey" }}>
                    <h5>아이디 : {id}</h5>
                    <h5>이름 : {name}</h5>
                    <h5>나이 : {age}</h5>
                    <h5>주소 : {address} <span><UpdataData id={user.id} setUsers={setUsers} /></span></h5>
                    <DeleteData id={user.id} setUsers={setUsers}/>
                </div>
            )
        })}
    </>
  )
}

export default Fetchdata