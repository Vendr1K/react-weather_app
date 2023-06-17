

import { Home } from './pages/Home/components';
import { MounthStatistic } from './pages/MounthStatistic/components';
import { Header } from './pages/shared/Header';
import './styles/app.scss';

function App() {
  return (

    <div className="App">
      <Header/>
      <Home/>
      <MounthStatistic/>
    </div>
  );
}

export default App;
