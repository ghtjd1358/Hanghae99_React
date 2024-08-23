import { useContext } from "react"
import { FamilyContext } from "../../context/FamilyContext"


function Child() {
  const {houseName, pocketMoney} = useContext(FamilyContext);

    const stressWord = {
        color : "red",
        fontWeight : "bold",
    }

  return (
    <div>
        <h3>난 이 집안의 막내오</h3><br/>
        <h3>할아버지가 우리 집 이름은 <span style={stressWord}>{houseName}</span>라고 하셨오</h3>
        <h3>게다가 용돈도 <span style={stressWord}>{pocketMoney}</span>만 주었오</h3>
    </div>
  )
}

export default Child