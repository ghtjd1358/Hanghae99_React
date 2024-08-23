import { useMemo, useState } from 'react'

function HeavyCompenets() {
    const [value, setValue] = useState(0);

    const heavyWork = () => {
        for(let i=0; i<1000000000; i++){return;}
            return 100
    }

    const sampleValue = useMemo(() => heavyWork(),[]);

  return (
    <>
        <p>나는 {sampleValue}를 가져오는 엄청 무거운 작업을 하는 컴포넌트야!</p>
        <button onClick={()=>setValue(value+1)}>클릭하면 아래 값이 증가</button><br/>
        <h2>{value}</h2>
    </>
    
  )
}

export default HeavyCompenets