import { useState } from 'react';
import './App.css';
import {Header, Hero, Footer} from './atoms';
import {Sidebar, Main} from './molecules';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className='app-container'>
      <Header />
      <div className='app-hero-container'>
        <Hero />
      </div>
      <div className='app-sidebar-main-container'>
        <div className='app-sidebar-container'>
          <Sidebar onSearch={handleSearch} />
        </div>
        <div className='app-main-container'>
          <Main searchTerm={searchTerm} />
        </div>
      </div>
      <div className='app-footer-container'>
          <Footer />
      </div>
    </div>
  );
}
export default App;