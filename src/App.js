import logo from './logo.svg';
import './App.css';



import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';


async function App() {
  let models = await DataStore.query(Todo);
  if (models.length < 10) {
    await DataStore.save(
      new Todo({
        "name": "Lorem ipsum dolor sit amet",
        "description": "Lorem ipsum dolor sit amet"
      })
    );
  }
  models = await DataStore.query(Todo);
  const model = models[models.length - 1];
  console.log(`models.length=${models.length}, model[-1].name=${model.name}, model[-1].description=${model.description}`);

  // await DataStore.save(
  //   new Todo({
  //     "name": "Lorem ipsum dolor sit amet",
  //     "description": "Lorem ipsum dolor sit amet"
  //   })
  // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
