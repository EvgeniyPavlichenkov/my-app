import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 15px;
`;

const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const MarkAndModel = styled.div`
    font-size: 16px;
`;

export const Phone = ({name, mark, model}) => {
    return (
        <Container>
            <Name>{name}</Name>
            <MarkAndModel>{mark} {model}</MarkAndModel>
        </Container>
    );
}