
import './App.css';
import Content from './component/Content';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Sidebar from './component/Side';

function App() {
  return (
    <body id="page-top">
    
      <div id='wrapper'>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Content />
          </div>
            <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
