import styled from "styled-components";

const Container = styled.div`
    padding: 10px 15px;
    background-color: #cb3f3f;
    text-align: center;
`;

const Title = styled.span`
    color: white;
    font-size: 20px;
`;

export const Button = (props) => {
    return (
        <Container onClick={props.onClick}>
            <Title>{props.title}</Title>
        </Container>
    );
}