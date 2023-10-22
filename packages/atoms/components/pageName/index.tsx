import React from 'react';

interface PageNameProps {
    name: string;
}

export const PageName = (props: PageNameProps) => {
    const { name } = props;

    return <>Page {name}</>
};
