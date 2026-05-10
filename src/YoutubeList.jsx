import { useEffect, useState } from "react";
import "./YoutubeList.css";

function YoutubeList() {
const [list, setList] = useState([])

const url = 'https://api.freeapi.app/api/v1/public/youtube/videos'
const options = {method: 'GET', headers: {accept: 'application/json'}};

useEffect(()=>{

 async function Getdata(){

    try{
      const data =  await fetch(url, options);
      const response = await data.json()

      console.log(response.data.data)

      // setState 
      const info = response.data.data
      setList(info)


    }catch(error){
      console.error(error)
    }
  
  }

  Getdata()

}, [])


  return (
   <div className="container">
      {list.map((vdolist) => (
        <div className="card" key={vdolist.id}>
          <img
            src={vdolist.items.snippet.thumbnails.medium.url}
            alt="video-img"
            className="thumbnail"
          />

          <div className="content">
            <h2>{vdolist.items.snippet.title}</h2>

            <p>{vdolist.items.snippet.channelTitle}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default YoutubeList