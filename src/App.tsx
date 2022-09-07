import { ThemeProvider } from 'styled-components';
import Global from './styles/global';
import { AppContainer } from './styles/style.app';
import RoutesMain from './routes';
import ModalDelete from './components/ModalDelete';
import { darkTheme, lightTheme } from './themes';
import { useDashboardContext } from './contexts/dashboard/dashboard';
import ModalEdit from './components/ModalEdit';


function App() {
  const { currentTheme } = useDashboardContext();

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <AppContainer>
        <Global />
        <ModalDelete />
        <RoutesMain />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
