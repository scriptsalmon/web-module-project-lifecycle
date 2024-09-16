import { useState } from 'react'

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updateValue => {
        setValue(updatedValue);
    }
    return [value, setValue, handleChanges];
};
