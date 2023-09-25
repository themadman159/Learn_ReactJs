import './App.css'
import { useState } from 'react'
import Picture from './components/Picture';
function App() {
  //set state sreaching
  const [word, setWord] = useState("")
  const [photos, setPhotos] = useState([]);

  const sreachimg = (e) => {
    e.preventDefault()
    if (!word) {
      alert("กรุณาป้อนชื่อรูปภาพ")
    } else {
      fetchimg()
    }
  }

  //fetch img from api
  async function fetchimg() {
    const url = `${import.meta.env.VITE_API_URL}?per_page=9&page=1&query=${word}&client_id=${import.meta.env.VITE_API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    const result = data.results

    if (result.length == 0) {
      alert("ไม่มีข้อมูลรูปภาพ")
      setWord("")
    } else {
      setPhotos(result)
    }
  }

  return (
    <section className='text-center'>
      <div className='m-4'>
        <h1 className='text-lg font-bold'>ระบบค้นหารูปภาพด้วย API</h1>
      </div>
      <div>
        <form className='' action='' onSubmit={sreachimg}>
          <input type="text" placeholder="ป้อนชื่อรูปภาพที่ต้องการค้นหา" className="input input-bordered w-full max-w-xs mx-2" value={word} onChange={(e) => setWord(e.target.value)} />
          <button className="btn btn-outline btn-primary" type='submit' name='search'>Search</button>
        </form>
      </div>

      <div className='flex justify-center items-center min-h-screen py-5'>
        <div className='grid grid-cols-3 gap-4'>
          {photos.map((data, index) => {
            return <Picture {...data} key={index} />
          })}
        </div>

      </div>
    </section>


  )
}

export default App
