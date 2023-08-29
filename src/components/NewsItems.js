import './NewsItem.css'

function NewsItems(props) {
    const { News, onClickOpen } = props;
    return(
        <div className="news-item">
            <img src={News.imgUrl} onClick={()=>{onClickOpen(News)}}/>
            <h3>{News.title}</h3> 
        </div>
    )
}

export default NewsItems;