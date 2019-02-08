import React, { Component } from 'react';

class Items extends React.Component {
    state = {
        items: [],
        description: ''
    }
    

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // get the items and description from the state 
        const { items, description } = this.state

        // update the state with the new item and clear the description
        this.setState({
            items: [...items, description ],
            description: ""
        });
    }

    render() {
        let { items } = this.state;
        return (
            <div>
                <span>My ToDo List</span>

                {/* Display the items here by looping through the items array in state */}
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button className="button--remove">Remove</button>
                        </li>
                        
                    ))}
                </ul>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="description">
                        Item:
                        <input 
                            type="text"
                            value={this.state.description}
                            placeholder="Item"
                            name="description"
                            id="description"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" className="button--add">Add</button>
                </form>
            </div>
        );
    }
}

export default Items;