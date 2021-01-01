
import NameEntry from './NameEntry.jsx';

export default function Selector({ data, selectedData, handleNameClick }) {
  console.log(data)

  return (
    <ul style={{
      display: "flex",
      flexWrap: "wrap",
      fontSize: "12px",
      fontWeight: "400",
      letterSpacing: "1px",
      maxWidth: "400px",
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
  )
}