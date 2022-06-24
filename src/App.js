import './App.css';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Content from './components/content/content.component';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
