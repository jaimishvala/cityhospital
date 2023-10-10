import React from 'react';
import { BaseButton, OutlineButton, PrimaryButton, SecondaryButton } from '../Button/Button.Style'

function Button({ children, btnType = "Primary", btnDisabled = false, ...rest }) {

    const CheckButtonType = () => {
        switch (btnType) {
            case "Primary":
                return PrimaryButton;

            case "Secondary":
                return SecondaryButton;

            case "Outline":
                return OutlineButton;
        }
    }

    const CustomButton = CheckButtonType();
    // console.log(CustomButton);


    return (
        <>
            <CustomButton disabled={btnDisabled} {...rest}>
                {children}
            </CustomButton>
        </>
    );
}

export default Button;