import { useState } from "react"

const App = () => {
  const [data, setData] = useState({
    arr: [
      {id: 1, name: 'about-me', title:'About Me'},
      {id: 2, name: 'technology', title:'Technology'},
      {id: 3, name: 'experience', title:'Experience'},
      {id: 4, name: 'projects', title:'Projects'},
      {id: 5, name: 'contact', title:'Contact'}
    ],
    selected: 'about-me'
  })

  const setActive = (name: any) => {
    setData(prevState => ({
      arr: prevState.arr,
      selected: name
    }))
  }

  return (
    <div className="w-full min-h-screen relative">
      <header className="fixed w-full bg-white/60 z-50 top-0 px-2 md:px-0 backdrop-filter backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-end h-16 space-x-12">
          <ul className="hidden md:flex space-x-12 cursor-pointer">
          {data.arr.map(({name, id, title}) => (
            <li key={id}>
              <span 
                className={data.selected === name ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-teal-600 font-semibold' : ''}
                onClick={() => setActive(name)}
              >
                {title}
              </span>
            </li>
          ))}
          </ul>
          
          <div className="hidden md:block">
          <button className='bg-gradient-to-r from-teal-600 to-teal-900 rounded-lg px-4 py-2 text-teal-50 shadow-2xl'>
            Resume
          </button>
          </div>
          
        </div>
      </header>
      <main>
        <div ref="">

        </div>
      </main>
    </div>
  )
}

export default App