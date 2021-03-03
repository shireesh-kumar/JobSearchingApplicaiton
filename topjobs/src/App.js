import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
        <Footer title="TopJobs" copyright="&reg; All Rights Reserved" />
      </BrowserRouter>
    </div>
  );
}

export default App;