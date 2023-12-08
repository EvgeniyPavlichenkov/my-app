import {Container} from "./components/Container";
import {Button} from "./components/Button";
import {Value} from "./components/Value";
import styled from "styled-components";
import {useCounterMutation} from "../../hooks/useCounter";

const ButtonsContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 50px;
`;

export const Counter = () => {
    const {value, onIncreaseButtonClickHandle, onDecreaseButtonClickHandle} = useCounterMutation();

    return (
        <Container>
            <Value value={value} />
            <ButtonsContainer>
                <Button onClick={onIncreaseButtonClickHandle} title={'Увеличить'} />
                <Button onClick={onDecreaseButtonClickHandle} title={'Уменьшить'} />
            </ButtonsContainer>
        </Container>
    );
}