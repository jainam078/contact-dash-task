import React from 'react';
import {RadioInputStyle} from './FormElements.Style';
import {
    Field
  } from 'formik';

interface IProps{
    label: string,
    id: string,
    value?: string | boolean,
    error?: string | boolean,
    checked: boolean,
    name: string,
    onClick?: ((e:any) => void) | undefined;
}

function RadioInput(props: IProps): JSX.Element {
    const {label, onClick, id, value, error, checked, name, ...rest} = props;
    return (
        <RadioInputStyle>
            <Field 
                {...rest}
                type={'radio'}
                id={id}
                value={value}
                name={name}
                onClick={onClick}
                checked={checked}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </RadioInputStyle>
    )
}
export default RadioInput;