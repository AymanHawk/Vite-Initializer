import { useState, useEffect } from "react";

const useImageURL = () => {
    const [imageURL, setImageURL] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", {mode: "cors"})
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("server error")
                }
                return response.json()
            })
            .then((reponse) => setImageURL(reponse[734].url))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { imageURL, error, loading }
}

const Image = () => {
    const { imageURL, error, loading } = useImageURL();

    if (error) return <p> A network error was encountered </p>
    if (loading) return <p> Loading... </p>

    return(
        <div>
            <h1> An Image </h1>
            <img src={imageURL} alt={"placeholder text"} />
        </div>
    )
}

export default Image;