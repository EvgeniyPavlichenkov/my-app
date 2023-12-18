import {Counter} from "./components/Counter/Counter";
import {Input} from './components/Input'
import {Alert} from './components/Alert/Alert'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
            <div>
                <Counter />
                <Input />
                <Alert />
            </div>
      </QueryClientProvider>
  );
}

export default App;
