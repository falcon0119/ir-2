import logo from './logo.svg';
import './App.css';
import IRImage from './components/IRImage';
import { useEffect, useState } from 'react';

function App() {
  fetchIrInfo();
  const LatestIRImages = [
    { img: "https://picsum.photos/500/300?random=1", href: "" },
    { img: "https://picsum.photos/500/300?random=2", href: "" },
    { img: "https://picsum.photos/500/300?random=3", href: "" },
    { img: "https://picsum.photos/500/300?random=4", href: "" },
    { img: "https://picsum.photos/500/300?random=5", href: "" },
  ];
  const [irinfo, setIrInfo] = useState([]);
  useEffect(() => {
    fetchIrInfo().then(async (data) => {
      const jsonData = await data.json()
      const hage2 = jsonData.map((e) => {
        return { img: e.ImgUrl, href: e.URL }
      })
      console.log({ hage2 })
      setIrInfo(hage2)
    })
  }, [])

  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  // const btnClick
  console.log(irinfo)
  return (
    <div className="App">
      <div className='Header'>
        <h1>IR 資料館</h1>
        <h2>IR資料館は、日本企業の投資家向け資料を
          検索できるサイトです。</h2>

        <div>
          <input id="search_bar" type="text" value={text} onChange={handleChange} placeholder='企業名を検索してください'></input>
        </div>
        <div>
          <button id="search_btn" onClick={() => fetchIrInfo(text).then(async (data) => {
            const jsonData = await data.json()
            const hage2 = jsonData.map((e) => {
              return { img: e.ImgUrl, href: e.URL }
            })
            console.log({ hage2 })
            setIrInfo(hage2)
          })} >検索</button>
        </div>

      </div>

      <div className='Latest' style={{ width: "100%", backgroundColor: "white", margin: 20 }}>
        <div className='' style={{ display: "flex", marginRight: "auto" }}>最新</div>
        <div className='' style={{ display: "flex", overflow: "auto" }} >
          {
            irinfo.map((e) => (
              <IRImage href={e.href} src={e.img} />
            ))
          }
        </div>
      </div>
      <div className='Category'></div>
    </div>
  );
}

export default App;

async function fetchIrInfo(search_term = "") {
  const url = 'https://nm422zt9ul.execute-api.us-east-1.amazonaws.com/default/search_ir_info?search=' + search_term
  return fetch(url, {
    method: "GET"
  })
    .catch(error => {
      // ネットワークエラーの場合はここに到達する
      console.error(error);
    })
}


