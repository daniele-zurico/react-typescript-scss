import * as React from 'react';
import * as classes from './Button.scss';
interface IProps {
    label: string,
    handleClick: () => void
}

const button = (props: IProps) => {
    const {label, handleClick} = props;
    return (<button className={classes.Button} onClick={handleClick}>{label}</button>)
}

export default button;