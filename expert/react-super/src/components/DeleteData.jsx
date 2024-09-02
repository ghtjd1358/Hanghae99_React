import supabase from "../subabaseClient";



function DeleteData({id, setUsers}) {

const handlerDelete = async () => { 
    const {error} = await supabase.from("NACAMP_SAMPLE").delete().eq('id', id);

    if(error){
        console.log(error)
    }else{
        alert("삭제되었습니다.")
        setUsers(prevData => prevData.filter((item)=>item.id !== id ));
    }
    
}

return (
<div 
onClick={handlerDelete}
style={{
    border : "5px solid pink",
    cursor : "pointer"
}}>
    <h3 style={{color : "pink"}}>삭제</h3>
</div>
)
}

export default DeleteData