import './App.css';
import {Header, Hero, Main, Footer} from './atoms';
import {Sidebar} from './molecules';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-hero-container'>
        <Hero />
      </div>
      <div className='app-main-container'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
export default App;
