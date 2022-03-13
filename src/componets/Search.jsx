export const Search = ({ svg, value, handleSearch, setOnsearch }) => {
    return <>
        <div className='search'>
            <input type="" placeholder='Search for Movie' onChange={handleSearch} />
            <img src={svg} alt="Search" onClick={setOnsearch} />
        </div>
    </>
}