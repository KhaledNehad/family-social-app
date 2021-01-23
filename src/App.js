import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/layout/navbar/Navbar';
import Hopepage from './components/pages/homepage/Homepage';

function App() {
  return (
    <div className={'App'}>
      <Navbar />
      <Hopepage />
    </div>
  );
}

export default App;
