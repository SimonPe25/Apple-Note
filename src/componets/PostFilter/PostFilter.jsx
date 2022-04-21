import React, { useState } from 'react';


const PostFilter = (props) => {

    const { postQuery, setSearchParams } = props

    const [search, setSearch] = useState(postQuery);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const query = form.search.value;
        setSearchParams({ card: query })
    }
    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <input type="submit" value="Search" />

        </form>
    );
};

export default PostFilter;