import { useState } from 'react';
import './App.css';
import {Hero, Footer} from './atoms';
import {Header, Sidebar, Main} from './molecules';

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
        <div className='app-main-container'>
          <Sidebar onSearch={handleSearch} />
          <Main searchTerm={searchTerm} />
        </div>
      <div className='app-footer-container'>
          <Footer />
      </div>
    </div>
  );
}
export default App;