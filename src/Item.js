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
                <input 
                    type="checkbox"
                    name="isChecked"
                    onChange={this.handleCheck}
                    checked={this.state.isChecked}
                />
                {item.description}
                {item.tags.map(tag => <Tag tag={tag} key={tag} />)}
                <button id="button--remove" onClick={() => this.props.removeItem(item)}>Remove</button>
            </li>
        );
    }
}

export default Item;