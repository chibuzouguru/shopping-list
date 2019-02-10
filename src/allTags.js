import React from 'react';

const ALL_TAGS = [
    { name: "home" },
    { name: "travel" },
    { name: "pet" },
    { name: "groceries" },
    { name: "school" },
    { name: "work" },
    { name: "family" }
]

const SelectTags = (props) => (
    <div className="dropdown--tags">
        {ALL_TAGS.map(tag => (
            <label key={tag.name} htmlFor={tag.name} >
                <input
                    type="checkbox"
                    value={tag.name}
                    id={tag.name}
                    onChange={props.tagUpdate}
                />
                {tag.name}
            </label>
        ))}
    </div>
);

export default SelectTags;