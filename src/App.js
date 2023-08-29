

import AppHeader from './components/AppHeader';
import './App.css';
import NewsItems from './components/NewsItems';
import NewsAll from './Data/NewsAll';
import NewsPost from './components/NewsPost';
import { useState } from 'react';


function App() {

  //filter search text
  const [textSearch, setTextSearch] = useState('');

  const filterSearchText = NewsAll.filter((newsText)=>{
    return newsText.title.includes(textSearch)
  })

  const ElementsNews = filterSearchText.map((News, key)=>{
    return <NewsItems key={key} News={News} onClickOpen={onNewsClickOpen}/>
  })


  const [selectNews, setSelectNews] = useState(null);

  function onNewsClickOpen(TheNews) {
    setSelectNews(TheNews)
  }

  function onNewsClickClose() {
    setSelectNews(null)
  }

  let newsPost = null;
  if(!!selectNews) {
    newsPost = <NewsPost N={selectNews} onBgClick={onNewsClickClose}/>
  }
  

  return (
    <div className="App">
        <AppHeader/>
        <div className='search-text'>
          <input
            className='search-text-input'
            type='text'
            placeholder='Searching'
            value={textSearch}
            onChange={(event)=>{setTextSearch(event.target.value)}}
          />
        </div>
        <div className='grid-items'>
          {ElementsNews}
        </div>
        {newsPost}
    </div>
  );
}

export default App;
