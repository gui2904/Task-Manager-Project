import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import User from './components/User.js'
import AddNewTodo from './components/AddNewTodo.js'
import Calendar from './components/Calendar.js'
import Projects from './components/Projects.js'
import Todos from './components/Todos.js'
import EditTodo from './components/EditTodo.js'

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewTodo/>
        <Calendar />
        <Projects />
      </Header>
      <Main>
        <Todos/>
        <EditTodo/ >
      </Main>
    </div >
  );
}

export default App;
