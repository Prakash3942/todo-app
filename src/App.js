import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <>
        <div className="container py-3">
          <AddTodo />
          <DisplayTodo />
        </div>
      </>
    </Provider>
  );
}

export default App;
