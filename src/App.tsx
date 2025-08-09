import packageJson from "../package.json";
import './App.css';

const environment = import.meta.env.VITE_MODE_ENV;

function App() {

  return (
    <>
      <h1>Frontend Example</h1>
      <div className="card">
        <p>
          Environment: <strong>{environment}</strong>
        </p>
      </div>
      <p className="read-the-docs">
        Version: <strong>{packageJson.version}</strong>
      </p>
    </>
  )
}

export default App
