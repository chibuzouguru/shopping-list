import React, { Component } from 'react';

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
        return (
            <li className="single-item">
                <input type="checkbox" name="isChecked" onChange={this.handleCheck} checked={this.state.isChecked}/>
                {item.description}
                <button className="button--remove" onClick={() => this.props.removeItem(item)}>Remove</button>
            </li>
        );
    }
}

export default Item;