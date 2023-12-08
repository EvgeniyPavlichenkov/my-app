import {Counter} from "./components/Counter/Counter";
import {Counter2} from "./components/Counter2";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
            <div>
                <Counter />
                <Counter2 />
            </div>
      </QueryClientProvider>
  );
}

export default App;
