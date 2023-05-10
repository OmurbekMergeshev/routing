import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Library from './components/Library';
import MyLibrary from './components/MyLibrary';
import Home from './components/Home';
import NewFilter from './pages/NewFilter';
import { Singlepage } from './components/Sinnglepaga';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news/" element={<News />} />
        <Route path="/library" element={<Library />} />
        <Route path="/mylibrary" element={<MyLibrary />} />
        <Route path="posts/:id" element={<Singlepage />} />

        <Route exact path="/post/:id" element={<NewFilter />} />



      </Routes>
    </BrowserRouter>

  );
};

export default App;
