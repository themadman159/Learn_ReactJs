import './App.css'
import Item from './components/Item'
import Logo from './assets/logo.png'
import content from './data/content'

function App() {

  return (
    <div>
      <div className=''>
        <img src={Logo} alt='logo' className='w-14 h-14' />
        <h1>React + Vite 2023</h1>
      </div>

      {content.map((data) => {
        return <Item key={data.id} {...data} />
      })}
    </div>
  )
}

export default App
