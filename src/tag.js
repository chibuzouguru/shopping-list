import React from 'react';

const Tag = (props) => (
    <span className="item--tag" id={`tagname-${props.tag}`}>
        {props.tag}
    </span>
);

export default Tag;