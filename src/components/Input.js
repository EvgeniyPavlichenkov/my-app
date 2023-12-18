import {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import {useName} from '../hooks/useName'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NameInput = styled.input`
    font-size: 25px;
`;

export const Input = () => {

    const inputRef = useRef();
    const containerRef = useRef();

    // Variant 1 - Bad
    // const getValueClickHandle = () => {
    //     const nameInputComponent = document.getElementById('name-input');
    //     if (nameInputComponent) {
    //         console.log(nameInputComponent.value)
    //     }
    // }

    // Variant 2 - Good
    // const getValueClickHandle = () => {
    //     if (inputRef.current){
    //         console.log(inputRef.current);
    //     }
    // }

    const {name, saveName} = useName()
    const [value, setValue] = useState('');

    useEffect(() => {
        if (name !== undefined) {
            setValue(name);
        }
    }, [name]);

    // Variant 3 - Excellent
    const onInputChange = (event) => {
        let newValue = event.nativeEvent.target.value;
        console.log(newValue);
        // const numberRegex = new RegExp(/\D/g);
        // newValue = newValue.replace(numberRegex, '')
        // if (newValue.length <= 5) {
        //     setValue(newValue);
        // }
        setValue(newValue);
    }

    const onSaveNameButtonClick = () => {
        saveName(value);
    }

    return (
        <Container ref={containerRef}>
            <NameInput ref={inputRef} value={value} onChange={onInputChange} />
            <button onClick={onSaveNameButtonClick}>SaveName</button>
        </Container>
    );
}