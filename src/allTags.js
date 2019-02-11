import React from 'react';

const ALL_TAGS = [
    { name: "Personal" },
    { name: "Work" },
    { name: "Travel" },
    { name: "Family" },
    { name: "Fun" }
]


const SelectTags = (props) => (
    <div className="dropdown--tags">
        {ALL_TAGS.map(tag => (
            <div className="checkbox" key={tag.name}>
                <input
                    type="checkbox"
                    value={tag.name}
                    onChange={props.tagUpdate}
                    id={tag.name}
                /> 
                <label htmlFor={tag.name} className="tags">
                    {tag.name}
                </label>
            </div> 
        ))}
    </div>
);

export default SelectTags;