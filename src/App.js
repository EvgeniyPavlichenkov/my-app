import {QueryClient, QueryClientProvider} from "react-query";
import {AddNewPhone} from "./components/AddNewPhone/AddNewPhone";
import styled from "styled-components";
import {PhonesList} from "./components/PhonesList";

const queryClient = new QueryClient()

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Wrapper>
              <AddNewPhone />
              <PhonesList />
          </Wrapper>
      </QueryClientProvider>
  );
}

export default App;
