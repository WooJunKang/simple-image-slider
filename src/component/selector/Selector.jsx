import NameEntry from './NameEntry.jsx';

export default function Selector({ data, selectedData, handleNameClick }) {
  console.log(data)

  return (
    <section className="__slider-select-area" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ul style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: "400",
        letterSpacing: "1px",
        width: "50%"
      }}>
        {
          data.map(entry => {
            return (
              <NameEntry
                key={entry.id}
                id={entry.id}
                name={entry.name}
                imgUrl={entry.img_url}
                selectedData={selectedData}
                handleNameClick={handleNameClick}
              />
            )
          })
        }
      </ul>
    </section >
  )
}