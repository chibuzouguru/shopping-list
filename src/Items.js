import React, { Component } from 'react';
import Item from './Item';
import allTags from './allTags';

class Items extends React.Component {
    state = {
        items: [],
        item: {
            description: '',
            tags: []
        },
        id: 0,
        isShowing: false
    }
    

    handleChange = (event) => {
        let value = event.target.value;

        this.setState({
            item: {
                description: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // check if the value is empty or not
        if(!this.state.item.description) return;

        // get the items and description from the state 
        const { items, item } = this.state

        // update the state with the new item and clear the description
        this.setState({
            items: [...items, {description: item.description, id: this.state.id} ],
            item: {
                description: ""
            },
            id: this.state.id + 1
        });
    }

    handleRemove = (item) => {
        let id = item.id;
        const { items } = this.state;

        // delete the item from the state array 
        this.setState({
            items: [...items].filter(item => item.id !== id)
        });
    }

    toggleTagsSelect = () => {
        // should show the tootip for the tags
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render() {
        const { items } = this.state;
        console.log(allTags);
        return (
            <div>
                <span>My ToDo List</span>

                {/* Display the items here by looping through the items array in state */}
                <ul>
                    {items.map(item => (
                        <Item item={item} removeItem={this.handleRemove} key={item.id} />
                    ))}
                </ul>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="description">
                        Item:
                        <input 
                            type="text"
                            value={this.state.item.description}
                            placeholder="Item"
                            name="description"
                            id="description"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="button--add-tag" onClick={this.toggleTagsSelect}>Add Tag</button>
                    <button type="submit" className="button--add">Add</button>
                </form>
            </div>
        );
    }
}

export default Items;