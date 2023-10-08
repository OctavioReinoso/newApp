import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/data'
import { NavBar } from './components/NavB';
import { Home } from './components/Home';
// import { ItemContainer } from './components/ItemListContainer/ItemContainer';
import { ItemList } from './components/ItemListContainer/ItemList';
import { TabsMenu } from './components/Tabs';
// import { CardItem } from './components/ItemListContainer/Item';


function App() {
  return (
    <body className="App">
      <BrowserRouter>
        
        <NavBar />
        
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/item'} element={ <ItemList />} />
          <Route exact path={'/itemTab'} element={ <TabsMenu />} />
        </Routes>

      </BrowserRouter>
        
    </body>
  );
}

export default App;
