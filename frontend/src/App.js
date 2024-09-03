import logo from './logo.svg';
import './Styles/App.scss'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar';
import Pageeditor from './Components/Pageeditor/Pageeditor';
import Rightsidebar from './Components/RightSidebar/Rightsidebar';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Leftsidebar />
        <Pageeditor />
        <Rightsidebar />
      </div>
    </div>
  );
}

export default App;
