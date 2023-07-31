import React from "react";

export const SearchBar = () => {
    const [value, setValue] = React.useState('');

    const changeValue = (i) =>{
        setValue(i);
    };
  return (
    <div className="search-wrapper">
      <span class="material-symbols-outlined" style={{userSelect:'none', cursor:'pointer'}}>search</span>
        
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          style={{
            cursor:'pointer',
            width: 500,
            border:'none',
            marginLeft:0.5,
            outline:'none',
          }}
          value={value}
          onChange={(e)=>{
            changeValue(e.target.value)
          }}
        />
      
    </div>
  );
};
