import router, { RenderRoutes } from './router';
import './App.css';

export default function App() {

  return (
    <div>
      <RenderRoutes routes={router} />
    </div>
  );
};

