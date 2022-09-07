import Global from './styles/global';
import RoutesMain from './routes';
import ModalDelete from './components/ModalDelete';
import ModalEdit from './components/ModalEdit';

function App() {
  return (
    <div className='App'>
      <Global />
      <ModalDelete />
      <ModalEdit />
      <RoutesMain />
    </div>
  );
}

export default App;
