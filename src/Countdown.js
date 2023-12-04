import React, {useEffect, useState} from "react";
import DateTime from "./components/DateTime";


// Написать компонент, в котором есть кнопка и div с числом. Число лежит в перменной, переменная - это стей
// При клике на кнопку вызывается функция, которая меняет перменную в стейте и возникает автоматический ререндер
// Значение переменной увеличивается на 1 с каждым кликом
const Countdown = () => {
    const [dateString, setDateString] = useState('');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDateString(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`);
        }, 1000);
    }, []);

    return (
        <div>
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
            <DateTime dateString={dateString} />
        </div>
    );
}

export default Countdown;