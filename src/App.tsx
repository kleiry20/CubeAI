import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <div className="app">
      <header className="header">This is header</header>
      <Sidebar />
    </div>
  );
}

export default App;
