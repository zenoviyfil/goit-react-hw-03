import css from './SearchBox.module.css'

const SearchBox = ({ value, onSearch }) => {

return (
  <div className={css.searchBox}>
    <p className={css.boxHeader}>Find contacts by name</p>
    <input className={css.boxInput} type="text" value={value} onChange={(e) => onSearch(e.target.value)} />
  </div>
  )
}

export default SearchBox