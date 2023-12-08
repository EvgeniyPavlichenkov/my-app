import styled from "styled-components";

const Container = styled.span`
    font-size: 30px;
`;

export const Value = (props) => {
    return <Container>{props.value}</Container>
}