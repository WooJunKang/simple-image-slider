export default function ImageEntry({ name, imgUrl }) {
  return (
    <div style={{
      width: "78px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "12px", letterSpacing: "2px"
    }}>
      <div
        className="__entry-img-bg"
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "62px",
          border: "1px solid gray",
          margin: "0px 8px 8px 8px",
          overflow: "hidden"
        }}
      >
        <img alt={`${name}`} src={`${imgUrl}`} style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </div>
      {name}
    </div>
  )
}