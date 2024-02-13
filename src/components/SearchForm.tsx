import { useEffect, useState } from "react";

export default function SearchForm() {

  const [searchText, setSearchText] = useState("");
  const [jobItemsList, setJobItemsList] = useState([])

useEffect(()=> {
  const fetchItems = async()=> {
    if(!searchText) return;

    const res = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`)
    const data = await res.json();
    setJobItemsList(data)
  }

  fetchItems()
},[searchText])

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
