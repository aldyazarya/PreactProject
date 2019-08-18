/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
import { h,Component } from 'preact';

class SearchImages extends Component {
    state = {term: ''}

    onSubmitForm = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <input onChange={(e) => {this.setState({term: e.target.value})}} type="text" className="form-control" placeholder="Search image here.." />
                </form>
            </div>
        )
    }
}

export default SearchImages