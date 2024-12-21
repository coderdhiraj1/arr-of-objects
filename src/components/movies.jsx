import Card from './common/card.jsx'

function Movies() {

    const movies = [
        { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
        { id: 2, title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
        { id: 3, title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
        { id: 4, title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
        { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
        { id: 6, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
        { id: 7, title: "Fight Club", director: "David Fincher", year: 1999 },
        { id: 8, title: "Titanic", director: "James Cameron", year: 1997 },
        { id: 9, title: "Avatar", director: "James Cameron", year: 2009 },
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    {/* title */}
                    <div className="col-sm-12 mt-2">
                        <h4 className="text-center">Movies</h4>
                    </div>
                    {/* cards */}
                    <div className="col-sm-12 mt-2">
                        <div className="row">
                            {movies.map((movie)=>(
                                <Card key={movie.id} title={movie.title} director={movie.director} year={movie.year} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default Movies