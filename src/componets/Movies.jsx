import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
export const Movies = ({ moveis }) => {


    return (
        <>
            {moveis ?
                <>
                    {

                        moveis.map((movie) => {
                            return (
                                <MovieCard movie={movie} />
                            )
                        })
                    }
                </>



                : (
                    <div className="empty">
                        <h2>Empty</h2>
                    </div>
                )
            }
        </>
    )
}