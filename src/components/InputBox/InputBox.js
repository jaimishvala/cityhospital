import React from 'react';
import { BaseInput } from './InputBox.Style';

function InputBox({ ...rest }) {

    return (
        <>
            <BaseInput {...rest}>
            </BaseInput>
        </>
    );
}

export default InputBox;