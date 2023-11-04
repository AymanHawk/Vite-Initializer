
import Clock from './components/Clock.jsx'
import AdditionDisplay from './components/AdditionDisplay.jsx';
import Input from './components/Input.jsx';
import CountInputChanges from './components/CountInputChanges.jsx';
import CountSecrets from './components/CountSecrets.jsx';
import {FunctionalInput, ClassInput} from './components/ClassComponents.jsx';
import RenderName from './components/RenderName.jsx';
import Profile from './components/Profile.jsx';
import {Link} from "react-router-dom"

function App() {

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Go to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const App1 = () => {
  <h1>out first test</h1>
}

export default App;
