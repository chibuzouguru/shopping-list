import React, { Component } from 'react';
import Item from './Item';
import SelectTags from './allTags';

class Items extends React.Component {
    state = {
        items: [],
        item: {
            description: ''
        },
        tags: [],
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
        });
    }

    handleItemTagUpdate = (event) => {
        let isChecked = event.target.checked
        let value = event.target.value;

        // check if the item is checked
        if(isChecked) {
            // if it is, add the value to the tags array
            this.setState({
                tags: [...this.state.tags, value]
            }); 
        } else {
             // if it is unchecked, remove it from the array
             this.setState({
                tags: [...this.state.tags].filter(tag => tag !== value)
            });
        }
    }

    handleItemCheck = (event) => {
        console.log(event.target.checked);
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    deleteAllItems = () => {
        this.checkItems();

        this.setState({
            items: [],
            id: 0,
            tags: []
        });
    }

    checkItems = () => {
        if(!this.state.items.length) {
            console.log("No items in arrat")
            return;
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // check if the value is empty or not
        if(!this.state.item.description) return;

        // hide the add tags component
        if(this.state.isShowing) {
            this.toggleTagsSelect();
        }

        // get the items and description from the state 
        const { items, item } = this.state

        // update the state with the new item and clear the description
        this.setState({
            items: [...items, {description: item.description, tags: [...this.state.tags], id: this.state.id} ],
            item: {
                description: ""
            },
            tags: [],
            id: this.state.id + 1
        });
    }

    render() {
        const { items, isShowing } = this.state;
        return (
            <section>
                {/* Display the items here by looping through the items array in state */}
                <nav>
                    <button onClick={this.deleteAllItems} id="button--delete">
                        <span role="img" aria-label="trashcan">🗑️</span>
                        Delete All
                    </button>
                </nav>
                <form className="form" onSubmit={this.handleSubmit} id="form">
                    <label htmlFor="description">
                        <input 
                            type="text"
                            value={this.state.item.description}
                            placeholder="Add an Item!"
                            name="description"
                            id="description"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="button" id="button--add-tag" onClick={this.toggleTagsSelect}>Tag{isShowing ? <SelectTags item={this.state.item} tagUpdate={this.handleItemTagUpdate} /> : ''}</button>
                    <button type="submit" id="button--add"><span role="img" aria-label="list-img">📝</span>Add</button>
                    {/* {isShowing ? <SelectTags item={this.state.item} tagUpdate={this.handleItemTagUpdate} /> : ''} */}
                </form>
                <ul>
                    {items.map(item => (
                        <Item 
                            item={item}
                            removeItem={this.handleRemove}
                            key={item.id}
                            handleItemCheck={this.handleItemCheck}
                        />
                    ))}
                </ul>
            </section>
        );
    }
}

export default Items;