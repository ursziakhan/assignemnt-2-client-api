// import logo from './logo.svg';
import './App.css';
import ManageItems from './pages/admin/ManageItems';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ManageItems />


      {/* <Router>
        Nav
        <Switch> */}
      {/* <Route path="/" exact component={Items} />
          <Route path="/manage-items" component={ManageItems} />
          <Route path="/update-item/:id" component={UpdateItem} />
          <Route path="/create-item" component={CreateItem} /> */}
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
