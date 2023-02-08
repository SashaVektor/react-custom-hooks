import Hover from "./components/Hover";
import List from "./components/List";
import useInput from "./hooks/useInput";
import {useState} from 'react'
import useDebounce from './hooks/useDebounce'
import List2 from "./components/List2";


function App() {
  const username = useInput("")
  const password = useInput("")
  const [value, setValue] = useState("")

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
  }

  const onChange = (e) => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }


  const debouncedSearch = useDebounce(search, 500)

  return (
    <div>
      <input type="text" {...username} placeholder="Username" />
      <input type="text" {...password} placeholder="Password" />
      <button onClick={() => console.log(username.value, password.value)}>Click</button>
      <Hover />
      <List />
      <input type="text" style={{ marginTop: "50px", height: "40px", width: "300px" }}
        value={value} onChange={onChange} />
      <List2 />
    </div>
  );
}

export default App;
