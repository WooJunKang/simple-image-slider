import React, { useState, useReducer, useCallback, useEffect } from "react";
import ImageSlider from './ImageSlider.jsx';
import Selector from './Selector.jsx';
import reducer from './reducer/reducer'
const HANDLE_NAME_CLiCK = "HANDLE_NAME_CLiCK";

function SliderContainer({ data }) {

  const [state, dispatch] = useReducer(reducer, { selectedData: [] })

  console.log(state);

  const handleNameClick = (e) => {
    console.log(e.target)

    dispatch({
      type: HANDLE_NAME_CLiCK,
      id: Number(e.target.getAttribute('id')),
      name: e.target.getAttribute('name'),
      imgUrl: e.target.getAttribute('imgurl')
    })
  }

  return (
    <div
      className='slider-container'
      style={{
        maxWidth: "731px",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid lightgray",
        borderRadius: "16px",
        padding: "36px 32px"
      }}
    >
      <header style={{ marginBottom: "32px", fontSize: "28px" }}>이미지 슬라이더</header>

      <section className="__slider-view-area" style={{ maxWidth: "664px" }}>
        <ImageSlider data={state.selectedData} />
      </section>

      <section className="__slider-select-area" style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
        <Selector data={data} selectedData={state.selectedData} handleNameClick={handleNameClick} />
      </section>

    </div>
  )
}

export default SliderContainer;