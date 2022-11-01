import logo from './logo.svg';
import './App.css';

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';


async function App() {
  Amplify.configure(awsconfig);

  const models = await DataStore.query(Todo);
  const model = models[0];
  console.log(model.name, model.description);

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
