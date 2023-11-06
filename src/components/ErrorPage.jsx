import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return(
        <div>
            <h1> Oh no, this route does't exist! </h1> <br />
            You can go back home by clicking <Link to='/'> here </Link> !
        </div>
    )
}

export default ErrorPage