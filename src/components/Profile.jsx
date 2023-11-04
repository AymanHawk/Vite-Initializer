import {Link} from 'react-router-dom'
import {Outlet, useParams} from 'react-router-dom'
import Popeye from './Popeye'
import Spinach from './Spinach'
import DefaultProfile from './DefaultProfile'

const Profile = () => {
    const { name } = useParams();
  
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The profile visited is here:</h2>
        {/* <Outlet/> */} {/* different way of achieveing the same thing */}
        {name === "popeye" ? ( // this is dynamic approach
          <Popeye />
        ) : name === "spinach" ? (
          <Spinach />
        ) : (
          <DefaultProfile />
        )}
      </div>
    );
  };

export default Profile