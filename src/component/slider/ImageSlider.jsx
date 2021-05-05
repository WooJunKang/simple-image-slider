import ImageEntry from './ImageEntry.jsx';
import { forwardRef } from 'react';

export default forwardRef(function ImageSlider({ data, sliderBtn, handleScrollLocation, handleScrollBtnClick }, forwardRef) {

  console.log(sliderBtn)

  return (
    <section className="__slider-view-area"
      style={{
        width: "664px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid lightgray",
        borderRadius: "16px",
        position: "relative"
      }}
    >
      <div style={{
        width: "162px", height: "80%",
        display: "flex", justifyContent: "flex-start", alignItems: "center", paddingLeft: "16px",
        background: sliderBtn.left && "linear-gradient(to right, rgba(255, 255, 255, 1) 55%, rgba(255, 255, 255, 0))",
        position: "absolute", left: "0px",
      }}
      >
        {
          sliderBtn.left && (
            <button
              type="button"
              value="LEFT"
              style={{ fontSize: "28px", color: "gray" }}
              onClick={handleScrollBtnClick}
            >
              &#60;
            </button>
          )
        }
      </div>

      <div
        className="__slider-view-area-viewer"
        style={{
          maxWidth: "468px", // 78px * 6
          height: "120px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          color: "gray"
        }}
        onScroll={(e) => handleScrollLocation(e.target.scrollLeft, e.target.scrollWidth - e.target.clientWidth)}
        ref={forwardRef}
      >

        {
          data.length > 0 ? (
            data.map(entry => {
              return (
                <ImageEntry key={entry.id} name={entry.name} imgUrl={entry.imgUrl} />
              )
            })
          ) : (
              <p style={{ fontStyle: "italic" }}>아래 동물을 클릭해서 이미지를 추가해보세요 :)</p>
            )
        }

      </div>

      <div
        style={{
          width: "162px", height: "80%",
          display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "16px",
          background: sliderBtn.right && "linear-gradient(to left, rgba(255, 255, 255, 1) 55%, rgba(255, 255, 255, 0))",
          position: "absolute", right: "0px",
        }}
      >
        {
          sliderBtn.right && (
            <button
              type="button"
              value="RIGHT"
              style={{ fontSize: "28px", color: "gray" }}
              onClick={handleScrollBtnClick}
            >
              &#62;
            </button>
          )
        }
      </div>

    </section >
  )
})

