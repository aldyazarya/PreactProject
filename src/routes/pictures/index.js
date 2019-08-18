/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-spaced-func */
/* eslint-disable key-spacing */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
import { h, Component} from 'preact';

import SearchImages from './SearchImage';
import ImageList from './ImageList';
import axios from 'axios';
import '../../style/pictures.css';

class Index extends Component {
    state= {images: []}

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query : term
            },
            headers: {
                Authorization: 'Client-ID 88901c001fd540c124638d494b76ee9c098508058541fddc007df48ab7e8bba6'
            }
        }).then ((res) => {
            this.setState({images : res.data.results})
            console.log("state sudah di update");
            
        }).catch((err) => {
            console.log(err);
            
        })
    }

    render(){
        return (
            <div className="container main" align="center">
                <h1>Search Image Using Unsplash API</h1>
                <SearchImages onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default Index;