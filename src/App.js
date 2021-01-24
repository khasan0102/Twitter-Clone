import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Feed from './feed/Feed';

function App() {
  return (
    <div className="App container">

      {/* Sidebar  */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets  */}
    </div>
  );
}

export default App;
