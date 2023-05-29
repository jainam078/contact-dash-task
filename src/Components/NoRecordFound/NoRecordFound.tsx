import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { NoRecordFoundStyle } from './NoRecordFound.Style';


interface IProps{
    title1: string,
    title2?: string
}

function NoRecordFound(props: IProps): JSX.Element {
    const {title1, title2} = props;
    return (
        <NoRecordFoundStyle>
            <AiFillCloseCircle/>
            <div>
                <h2>{title1}</h2>
                <p>{title2}</p>
            </div>
        </NoRecordFoundStyle>
    )
}
export default NoRecordFound;