import { useParams } from "react-router-dom"
import { data } from "../data"
export const MovieDetails = () => {
    let { id } = useParams()
    console.log(id)
    console.log(data)
    return (
        <>
            <div className="movie-poster">
                <img src={data.Poster} alt="" />
            </div>
        </>
    )
}