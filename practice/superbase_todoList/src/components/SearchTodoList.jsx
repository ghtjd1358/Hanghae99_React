
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchTodo } from '../reducer/slice/FetchSearch'
import { useInput } from '../hooks/useInput'
import { useState } from 'react'



const SearchTodoList = () => {
    const dispatch = useDispatch()
    const { todos } = useSelector((state) => state.FetchSearch )  
    const [search, onChangeSearch, setSearch] = useInput('')
    const [searchType, setSearchType ] = useState('name')
    console.log('serch', todos) 

    const searchHandler = () => {
      const searchForm = {
        search : search,
        searchType : searchType
      }
      dispatch(fetchSearchTodo(searchForm))
      setSearch('')
    }
  
    return (
    <div>
      <h3>게시판 검색</h3>
      <input type='text' value={search} onChange={onChangeSearch}/>
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)} >
        <option value="name">이름</option>
        <option value="age">나이</option>
        <option value="address">주소</option>
      </select>
      <button onClick={searchHandler}>검색</button>
    </div>
  )
}

export default SearchTodoList