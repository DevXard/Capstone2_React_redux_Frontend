const SearchBar = () => {

    return (
        <div className="p-8 mb-5 flex justify-center">
            <form className="bg-white w-10/12 flex items-center rounded-full shadow-xl border border-gray-100">
                <input className="rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none" type="text" placeholder="Search"/>
                <div className="p-4">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Search</button>
                </div>
                
            </form>
        </div>
    )
}

export default SearchBar;