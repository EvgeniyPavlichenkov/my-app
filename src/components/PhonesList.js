import {usePhones} from "../hooks/usePhones";
import styled from "styled-components";
import {Phone} from "./Phone";
import {useState} from "react";


const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 20px;
`;

export const PhonesList = () => {
    const {phones} = usePhones()
    const [searchValue, setSearchValue] = useState('');

    if (!phones) {
        return null;
    }

    const onSearchInputChange = (event) => {
        setSearchValue(event.nativeEvent.target.value);
    }

    const filteredPhones = filterPhones(phones, searchValue);

    return (
        <Container>
            <Input value={searchValue} onChange={onSearchInputChange} />
            {filteredPhones.map((phone, index) => {
                return <Phone key={index} name={phone.name} mark={phone.phoneMark} model={phone.phoneModel} />
            })}
        </Container>
    );
}

const filterPhones = (phones, searchValue) => {
    return phones.filter((el) => {
        const isNameMatch = el.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        const isMarkMatch = el.phoneMark.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        const isModelMatch = el.phoneModel.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        return isNameMatch || isMarkMatch || isModelMatch;
    });
}