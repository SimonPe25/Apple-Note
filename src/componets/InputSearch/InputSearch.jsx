import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const InputSearch = () => {
    return (
        <div>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 100, height:50}}
            />
        </div>
    );
};

export default InputSearch;