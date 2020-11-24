import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ShowList from './components/Show/ShowList';

export default function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateSearch = (value) => {
    setSearch(value);
  }
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Input loading={loading} search={search} updateSearch={handleUpdateSearch} />
        <ShowList search={search} loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
}