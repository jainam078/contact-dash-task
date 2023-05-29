import React from 'react';
import {BreadCrumbContainer} from './BreadCrumb.Style';

interface IProps{
    icon?: React.ReactElement,
    title: string,
    subTitle: string
}

function BreadCrumb(props: IProps): JSX.Element {
    const {title, subTitle, icon} = props;
    return (
        <BreadCrumbContainer>
            {icon}
            <div className='ml-3'>
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
        </BreadCrumbContainer>
    )
}
export default BreadCrumb;