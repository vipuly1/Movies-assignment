import React, { Component } from 'react'
import axios from "axios"

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList: [],
            filteredList: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        this.setState({ moviesList: response.data.Search })
        this.setState({ filteredList: response.data.Search })

    }
    handleChange = (e) => {
        console.log(e.target.value)
        const filteredArray = this.state.moviesList.filter(item => {
            return item.Title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        this.setState({ filteredList: filteredArray })
    }

    render() {
        return (
            <div>
                <div className="input">
                    <input onChange={this.handleChange} type="text" placeholder="Seach Movies here" />
                    <i className="fas fa-search search-icon"></i>
                </div>
                <div className="card-container">
                    {this.state.filteredList.map(item => {
                        return <div className="card" key={item.imdbID}>
                            <div className="imgWrapper">
                                <img className="img" src={item.Poster} />
                                <div className="image-overlay">
                                    <p>{item.Title}</p>
                                </div>
                            </div>
                            <div className="Movie-name-wrapper">
                                <h2>{item.Title}</h2>
                            </div>
                        </div>
                    })}
                </div>
                
                <footer id="footer">
                    &copy; All Rights Reserverd By धूम धड़ाका ऑर्केस्ट्रा |
                </footer>


            </div>
        )
    }
}

export default Movies
