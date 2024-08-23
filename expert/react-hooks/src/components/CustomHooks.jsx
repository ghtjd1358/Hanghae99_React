import { useInput } from '../hooks/useInput';


// custom Hook을 만들 때 주의사항!
// 1) custom hook의 함수이름은 use로 시작하는 것이 좋음
// 2) 파일 이름은 원하는 대로

function CustomHooks() {
    const [title, onChangeTitleHandler] = useInput();
    const [body, onChangeBodyHandler] = useInput();

    console.log(`제목 : ${title}`, `: 바디 : ${body}`)
    

  return (
    <>
        <input type='text' name='title' value={title} onChange={onChangeTitleHandler}/>
        <input type='text' name='body' value={body} onChange={onChangeBodyHandler}/>
    </>
  )
}

export default CustomHooks