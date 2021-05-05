import React, { useReducer, useEffect, useRef } from "react";
import ImageSlider from './slider/ImageSlider.jsx';
import Selector from './selector/Selector.jsx';
import reducer from './reducer/reducer'
import initialState from './initialState/initialState'
const HANDLE_NAME_CLiCK = "HANDLE_NAME_CLiCK";
const HANDLE_SLIDE_BTN = "HANDLE_SLIDE_BTN";


function SliderContainer({ data }) {
  const sliderViewer = useRef();
  const [state, dispatch] = useReducer(reducer, initialState)

  ///////////////////////////////////////////////////////////
  // 추가된 이미지가 6개 초과할 경우 최초 오른쪽 이동 버튼 생성 life cycle
  useEffect(() => {
    let way = state.selectedData.length > 6 ? 'RIGHT' : 'NONE';
    dispatch({
      type: HANDLE_SLIDE_BTN,
      way
    })

  }, [state.selectedData])
  ///////////////////////////////////////////////////////////

  ////////////////////////////////////////
  // 셀렉터 내 이름 클릭시 슬라이더에 이미지 toggle
  const handleNameClick = (e) => {
    dispatch({
      type: HANDLE_NAME_CLiCK,
      id: Number(e.target.getAttribute('id')), //type: integer
      name: e.target.getAttribute('name'), // type: string
      imgUrl: e.target.getAttribute('imgurl') // type: string
    })
  }
  ////////////////////////////////////////

  ////////////////////////////////////
  // 스크롤 위치에 따른 좌우 이동 버튼 toggle
  const handleScrollLocation = (scrollLoc, max) => {
    let way;
    if (scrollLoc === 0) { // 가장 왼쪽에 위치
      way = 'RIGHT';
    } else if (scrollLoc < max) { // 중간에 위치
      way = 'BOTH';
    } else if (scrollLoc >= max) { // 가장 끝에 위치
      way = 'LEFT'
    }
    dispatch({
      type: HANDLE_SLIDE_BTN,
      way
    })
  }
  ////////////////////////////////////

  const handleScrollBtnClick = (e) => {
    if (e.target.value === 'LEFT') {
      sliderViewer.current.scrollLeft -= 78 + 1;
    } else if (e.target.value === 'RIGHT') {
      sliderViewer.current.scrollLeft += 78 + 1;
    }
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
      <header style={{ marginBottom: "32px", fontSize: "28px" }}>Simple Image Slider</header>

      <ImageSlider
        data={state.selectedData}
        sliderBtn={state.sliderBtn}
        handleScrollLocation={handleScrollLocation}
        handleScrollBtnClick={handleScrollBtnClick}
        ref={sliderViewer}
      />
      <Selector data={data} selectedData={state.selectedData} handleNameClick={handleNameClick} />

    </div>
  )
}

export default SliderContainer;