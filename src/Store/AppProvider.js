import { createStore } from "redux";
import { Provider } from "react-redux";
import { HomeReducer } from "./HomeReducer/HomeReducer";

function AppProvider({ children }) {
  const store = createStore(
    HomeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
