import Global from './styles/global';
import RoutesMain from './routes';
import ModalDelete from './components/ModalDelete';

function App() {
  return (
    <div className='App'>
      <Global />
      <ModalDelete />
      <RoutesMain />
    </div>
  );
}

export default App;
