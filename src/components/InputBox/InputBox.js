import React from 'react';
import { BaseInput, InputError } from './InputBox.Style';

function InputBox({ TextError, ...rest }) {

    return (
        <>
            <BaseInput {...rest}>
            </BaseInput>

            <InputError TextError1={TextError}>
                {TextError}
            </InputError>
        </>
    );
}

export default InputBox;