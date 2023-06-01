import './styles/app.scss';
import { BrowserRouter } from "react-router-dom";
import { Header } from '../widgets/header';
import { Footer } from '../widgets/footer';
import DynamicAdaptiveContextComponent from '../legacy_components/legacy_dynamicAdaptive/context';
import Main from '../legacy_components/main/main';

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