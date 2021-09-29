import React from 'react'

export default function Search (props) {

    const onChange = (e) => {
        props.handleSearch(e);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <input 
                    type="text"
                    name="search"
                    onChange={onChange}
                    />
                </label>
                <button>Search</button>
            </form>


        </div>
    )
}
