import { useState } from "react"

const useInput = () => {
    // vlaue를 useState로 관리
    const [value, setValue] = useState('')

    // handler 로직 
    const handler = (e) => {
        setValue(e.target.value);
    }

    return [value, handler];
}

export {useInput}