import React from 'react';
import {InputStyle} from './FormElements.Style';
import {
    Field
  } from 'formik';

interface IProps{
    label: string,
    placeholder: string,
    id: string,
    type?: 'text' | 'password',
    value?: string,
    error?: string | boolean,
    onChange?: ((e:any) => void) | undefined;
}

function Input(props: IProps): JSX.Element {
    const {label, onChange, placeholder, id, type='text', value, error, ...rest} = props;
    return (
        <InputStyle error={error}>
            <label htmlFor={id}>
                {label}
            </label>
            <Field 
                {...rest}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && (
                <div className='error-message'>{error}</div>
            )}
        </InputStyle>
    )
}
export default Input;