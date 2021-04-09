import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Xkcd() {
  const [imgSrc, setImgSrc] = useState("")
  useEffect(async () => {
    const info = await axios.get("https://any-api.com:8443/http://xkcd.com/info.0.json")
    setImgSrc(info.data.img)
  }, [])

  return (
    <div>
      { imgSrc && <img src={imgSrc} /> }
    </div>
  )
}
