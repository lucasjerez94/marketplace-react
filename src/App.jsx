import { useState } from 'react';
import './App.css';
import {Header, Hero, Footer} from './atoms';
import {Sidebar, Main} from './molecules';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='app-container'>
      <Header />
      <div className='app-hero-container'>
        <Hero />
      </div>
      <div className='app-main-container'>
        <Sidebar onSearch={handleSearch} />
        <Main searchTerm={searchTerm}/>
      </div>
      <Footer />
    </div>
  );
}
export default App;
