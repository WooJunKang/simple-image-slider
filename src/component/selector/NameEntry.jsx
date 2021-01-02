export default function NameEntry({ id, name, imgUrl, selectedData, handleNameClick }) {
  const baseStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "2px 4px",
    border: "1px solid lightgray",
    color: "lightgray",
    marginRight: "4px",
    marginBottom: "4px"
  }

  const selectedStyle = {
    ...baseStyle,
    border: "1px solid black",
    color: "black"
  }

  return (
    <li
      id={id}
      key={id}
      style={selectedData.some(entry => entry.id === id) ? selectedStyle : baseStyle}
      imgurl={imgUrl}
      name={name}
      onClick={handleNameClick}
    >
      {name}
    </li>
  )
}