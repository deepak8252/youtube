import React from 'react'

const Videocard = ({data}) => {
    console.log(data);
    const {snippet,statistics}=data || {};
    const {channelTitle,title,thumbnails}=snippet  || {};
  return (
    <div>
        <h2>hello video card</h2>
        <img src={thumbnails?.medium?.url} alt={title} />
        <ul>
            <li>{channelTitle}</li>
            <li>{title}</li>
            <li>{statistics?.viewCount}</li>
        </ul> 
    </div>
  )
}

export default Videocard