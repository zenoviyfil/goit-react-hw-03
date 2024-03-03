import css from './SearchBox.module.css'

const SearchBox = ({ value, handleSearch }) => {

return (
  <div>
  <p>Find contacts by name</p>
  <input type="text" value={value} onChange={handleSearch} />
</div>
)
}

export default SearchBox