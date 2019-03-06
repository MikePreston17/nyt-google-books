import React, {Component} from 'react'
import SubmitButton from './SubmitButton'

export default class SearchBar extends Component {

    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const query = event.target.elements.query.value;
        console.log('search: ', query);
        this.props.onSearch(query);
    }

    componentDidMount(){
        const {onSearch, initialQuery} = this.props;
        
        if (initialQuery)
            onSearch(initialQuery)
    }

    render() {
        const {initialQuery, filterText} = this.props;
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>Enter a word or phrase:</h3>                
                        <input 
                            value={filterText}
                            defaultValue={initialQuery}
                            style={inputStyle} 
                            placeholder='Find your book!' type="text" name="query" />
                            {' '}
                            {/* <SubmitButton value={"Search"}></SubmitButton> */}
                        <button style={buttonStyle} type="submit">Search</button>
                    </div>
                </form>
            </section>
        );
    }
}

const inputStyle = { border :'3px solid #f54646'};
const buttonStyle = { margin: '10px' }