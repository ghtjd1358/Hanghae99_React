

// context API 필수 개념 : 
/*
    1. createContext : context를 생성한다.
    2. useContext : context를 구독하고 해당 context의 현재 값을 읽는다.
    3. Provider : context를 하위 컴포넌트에게 전달
*/

function UseContext() {
  return (
    // react context가 필요한 이유 : 프롭 드릴링 현상 방지
    // 프롭 드릴링 문제점 : 깊어가 너무 깊어지면 prop이 어떤 컴포넌트로 왔는지 알 수가 없음
    // 어떤 컴포넌트에서 문제가 발생할 경우 추적이 힘들어져 늦어질 수 있음
    <div>UseContext</div>
  )
}

export default UseContext