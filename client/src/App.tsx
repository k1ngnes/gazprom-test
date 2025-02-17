import {Table} from "./components/Table.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

function App() {

  return (
    <Provider store={store}>
      <Table />
    </Provider>
  )
}

export default App
