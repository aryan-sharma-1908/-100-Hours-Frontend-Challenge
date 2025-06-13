import React, {useState} from 'react'
import axios from 'axios'
import Card from './Card'

const CardsContainer = () => {
    const [data, setData] = useState([])
   const HandleClickChange = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=6')
        setData(response.data)
  }
  return (
    <div>
      <button className="bg-emerald-500 px-4 py-2 text-xl rounded relative top-38 left-30 active:scale-90" onClick={HandleClickChange}>Add Data</button>
      <div className=" bg-gray-700 flex gap-5 justify-center flex-wrap items-center mt-40 py-10">
        {data.map((e) => {
          return <Card key={e.id} url={e.download_url} name={e.author}/>
        })}
      </div>
    </div>
  )
}

export default CardsContainer
