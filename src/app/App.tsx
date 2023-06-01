import './styles/app.scss';
import { BrowserRouter } from "react-router-dom";
import DynamicAdaptiveContextComponent from '../components/legacy_dynamicAdaptive/context';
import { Header } from '../widgets/header';
import Main from '../components/main/main';
import { Footer } from '../widgets/footer';

export function App() {
  return (
    <div className="app">
      <DynamicAdaptiveContextComponent>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </DynamicAdaptiveContextComponent>
    </div>
  );
}