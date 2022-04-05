import React from 'react'; //import react
import logo from './logo.svg';
import './App.css';

class App extends React.Component { //ganti function jadi class
  render(){ //tambah render
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className='title'>
            Project Pertama ReactJS
          </h3>
          <p className='subtitle'>
            Belajar ReactJs itu mudah dan menyenangkan
          </p>
        </header>
      </div>
    );
  } //tambah close render
}

export default App;
