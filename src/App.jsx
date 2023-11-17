import { useState } from 'react'


import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>horizontal scroll</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div> */}
     
      <div className='container'>
        <div className='sticky-column'>test </div>
        <div className='scrollable-column'>scroll Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis suscipit sapiente officiis consequuntur deleniti temporibus consectetur deserunt placeat iure. Possimus quas voluptates nobis quo iure ipsum laborum laboriosam earum esse.</div>
        <div className='sticky-column'>test </div>
        <div className='scrollable-column'>scroll Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis suscipit sapiente officiis consequuntur deleniti temporibus consectetur deserunt placeat iure. Possimus quas voluptates nobis quo iure ipsum laborum laboriosam earum esse.</div>
      </div>
    </>
  )
}

export default App
