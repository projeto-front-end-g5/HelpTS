import Header from './components/Header';
import DashboardDescription from './components/DashboardDescription';
import SolutionCard from './components/SolutionCard';

import Global from './styles/global';

function App() {
  return (
    <div className='App'>
      <Global />
      
      <Header />

      <DashboardDescription />
      
      <SolutionCard />

    </div>
  );
}

export default App;
