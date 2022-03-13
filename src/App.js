import logo from './logo.svg';
import './App.css';
import IRImage from './components/IRImage';
import { useEffect, useState } from 'react';

function App() {
  fetchIrInfo();
  const LatestIRImages = [
    {img: "https://picsum.photos/500/300?random=1", href: ""},
    {img: "https://picsum.photos/500/300?random=2", href: ""},
    {img: "https://picsum.photos/500/300?random=3", href: ""},
    {img: "https://picsum.photos/500/300?random=4", href: ""},
    {img: "https://picsum.photos/500/300?random=5", href: ""},
  ];
  const [irinfo, setIrInfo]=useState([]);
  useEffect(()=>{
    fetchIrInfo().then( (data)=>{
      const hage=data;
      console.log({hage});
      const hage2 = hage.map((e) => {
        return {img: e.ImgUrl, href: e.URL }
      })
      console.log({hage2})
      setIrInfo(hage2)
    })
  }, [])
  console.log(irinfo)
  return (
    <div className="App">
      <div className='Header'>
        <h1>IR 資料館</h1>
          <h2>IR資料館は、日本企業の投資家向け資料を
            検索できるサイトです。</h2>

            <div>
              <input id="search_bar" type="text" placeholder='企業名を検索してください'></input>        
            </div>
            <div>
              <input id="search_btn" type="button" value="検索" ></input> 
            </div>
            
      </div>

      <div className='Latest' style={{width: "100%", backgroundColor: "green", margin: 20}}>
        <div className='' style={{display: "flex", marginRight: "auto"}}>最新</div>
        <div className='' style={{display: "flex", overflow: "auto"}} >
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

async function fetchIrInfo(){
  return fetch('https://nm422zt9ul.execute-api.us-east-1.amazonaws.com/default/search_ir_info', {
    method: "GET",
    
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    // 404 や 500 ステータスならここに到達する
    throw new Error('Network response was not ok.');
  })
  .then(resJson => {
    return resJson;
  })
  .catch(error => {
    // ネットワークエラーの場合はここに到達する
    console.error(error);
  })
}


