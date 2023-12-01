import './App.css';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Sidebar} from './components/Sidebar';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

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
