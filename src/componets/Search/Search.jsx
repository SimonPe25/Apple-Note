import React, { useContext } from 'react';
import { Context } from '../../context';


const Search = () => {


  const {btnAdd} = useContext(Context)

  console.log("btnAdd ----", btnAdd);
    return (
        <div>
            
        </div>
    );
};

export default Search;
