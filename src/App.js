import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainPage from "./pages/main/main.component";
import { persistor, store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainPage />
        </PersistGate>
      </Provider>    
    </div>
  );
}

export default App;
