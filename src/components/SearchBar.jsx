import React, {Component} from "react";
//The above is the same as const Component = React.Component
//We are extracting the Component property from React using es6 syntax

//Define a new class called SearchBar and give it access to all functionality that React.Component has. Notice how we extent only Component. Read ABOVE for explanation.

class SearchBar extends Component {
    //The constructor function is the first and only function that gets called automatically when a new instance of the class is created
    constructor(props) {
        //THIS IS MAGIC
        super(props);

        this.state = {term: ""};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    //Controlled component. The value is set by state.
                    value={this.state.value}
                    onChange={event=> this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;