function SearchBar(props) {
  return (
    <>
      <div className="w-[1440px] mx-auto px-72 pt-10">
        <h3 className="font-bold text-slate-500">ค้นหาที่เที่ยว</h3>
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          className="w-full mt-2  border-b-2 text-center focus:outline-none focus:border-b-sky-500"
          onChange={(e) => {
            props.setFindPostState(e.target.value);
          }}
          value={props.findPostState}
        />
      </div>
    </>
  );
}
export default SearchBar;
