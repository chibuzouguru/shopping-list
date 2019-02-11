import React, { Component } from 'react';
import Tag from './tag';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    // handle the checked value
    handleCheck = (event) => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render() {
        const { item } = this.props;
        console.log(item)
        return (
            <li className="single-item">
                <div className="item-checkbox">
                    <input
                        type="checkbox"
                        name="isChecked"
                        onChange={this.handleCheck}
                        checked={this.state.isChecked}
                        id={`item-${item.id}`}
                    />
                    <label htmlFor={`item-${item.id}`}>
                        {item.description}
                    </label>
                </div>
                <button id="button--remove" onClick={() => this.props.removeItem(item)}>&times;</button>
                <div className="item-tags">
                    {item.tags.map(tag => <Tag tag={tag} key={tag} />)}
                </div>
            </li>
        );
    }
}

export default Item;