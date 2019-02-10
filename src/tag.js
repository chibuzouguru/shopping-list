import React from 'react';

const Tag = (props) => (
    <em className="item--tag" id={props.tag}>
        {props.tag}
    </em>
);

export default Tag;