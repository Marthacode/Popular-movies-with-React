import React from 'react'

class PopularMovies extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posterFullUrl:'https://images.tmdb.org/t/p/w185//',
            movies:[],
            title: '',
            movieImg:'',
            description: '',
            date:''
        }
    }
    
    componentDidMount(){
        const apiUrl=("https://api.themoviedb.org/3/movie/popular?api_key=")
        const apiKey=("YOUR-API-KEY")
        
        fetch(apiUrl + apiKey)
        .then(response => response.json())
        .then((data) =>{
           this.setState({movies :data.results})
        
        })
    }
        render(){
            return(
                <div class="row ml-5 mt-3">
                    {this.state.movies.map(movie =>(
                        <div class="col-3" key={movie.id}>
                            <img src={"https://images.tmdb.org/t/p/w185//" + movie.poster_path} alt="" />
                            <h5>{movie.title}</h5>
                        </div>
                    ))}
                </div>
            )
           /* 
        return(
            <div class="card-deck">
                <div class="card">
                {this.state.movies.map(movie =>(
                    <div key={movie.id}>
                        <img src={"https://images.tmdb.org/t/p/w185//" + movie.poster_path} class="card-img-top" alt="" />
                        <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">{movie.overview}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Releaseed Date: {movie.release_date}</small>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )*/

        }

        
}         
        

export default PopularMovies;