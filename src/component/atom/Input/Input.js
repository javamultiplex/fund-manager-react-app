import React from 'react';

const Input = ({
    id,
    name,
    className,
    disabled,
    validate,
    ...extraProps
}) => (
    <input
    id={id}
    name={name}
    className={className}
    disabled={disabled}
    {...extraProps}
    />
);

export default Input;