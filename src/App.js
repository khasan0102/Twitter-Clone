import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/Sidebar';
function App() {
  return (
    <div>
      <Sidebar title="Bu title" data={{name: 'Khasan'}}  />
    </div>
  );
}

export default App;
