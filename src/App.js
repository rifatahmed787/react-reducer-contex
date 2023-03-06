import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Counter from "./component/counter/Counter";
import Counter1 from "./component/counter/Counter1";
import Counter2 from "./component/counter/Counter2";
import Form from "./component/Form/Form";
import store from "./Redux/Store";
import routes from "./routes";

function App() {
  return (
    <div className="">
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <Form /> */}
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
