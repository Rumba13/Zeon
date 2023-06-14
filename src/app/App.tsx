import './styles/App.scss';
import { BrowserRouter } from "react-router-dom";
import { Layout } from '../layouts/layout';
import { Routing } from '../pages/rounting';

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </div>
  );
}