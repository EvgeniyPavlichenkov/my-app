import {useCounter} from "../hooks/useCounter";
import styled from "styled-components";


const Container = styled.div`
    text-align: center;
    font-size: 30px;
    color: red;
`;

export const Counter2 = () => {
    const {value} = useCounter();
    return <Container>{value}</Container>

}