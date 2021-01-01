import React from 'react';
import ImageEntry from './ImageEntry.jsx';


export default function ImageSlider({ data }) {

  console.log(data)

  return (
    <div
      style={{
        minWidth: "400px",
        maxWidth: "400px",
        height: "120px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "scroll"
      }}
    >

      {
        data.map(entry => {
          return (
            <ImageEntry key={entry.id} name={entry.name} imgUrl={entry.imgUrl} />
          )
        })
      }



    </div>
  )
}

