export const CounterActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem('value', value);
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('value');
            if (!savedValue || isNaN(savedValue)) {
                return 0;
            }
            resolve(parseInt(savedValue, 10));
        })
    }
}