import { useSearchContext } from "../libs/hooks";




export default function SearchForm() {

  const {searchText, setSearchText} = useSearchContext()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> setSearchText(e.target.value)

  return (
    <form  onSubmit={(e)=> e.preventDefault()} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={handleChange}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
