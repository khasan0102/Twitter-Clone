import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widgets/Widgets';

function App() {
  return (
    <div className="App container">

      {/* Sidebar  */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets  */}
      <Widgets />
    </div>
  );
}

export default App;
