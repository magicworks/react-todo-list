import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className='App'>
      <TodoList />
      <p className='insp'>
        Design inspiration&nbsp;
        <a
          href='https://codepen.io/saawsan/pen/jayzeq'
          target='_blank'
          rel='noreferrer'
        >
          https://codepen.io/saawsan/pen/jayzeq
        </a>
      </p>
    </div>
  );
}

export default App;
