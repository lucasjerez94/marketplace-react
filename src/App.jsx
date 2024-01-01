import { useState } from 'react';
import { StylesProvider } from './StylesContext';
import './App.css';
import {Hero, Footer} from './atoms';
import {Header, Sidebar, Main} from './molecules';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className="App">
      <StylesProvider>
          <Header />
            <Hero />
            <div className="prueba">
              <div className="app-main-container">
                <Sidebar onSearch={handleSearch} />
                <Main searchTerm={searchTerm} />
              </div>
            </div>
              <Footer />
      </StylesProvider>
    </div>
  );
}
export default App;