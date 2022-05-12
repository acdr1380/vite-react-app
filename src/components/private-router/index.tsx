import React from 'react';
import Config from '@/config';

interface IProps {
    element: React.FunctionComponent;
    mete?: Record<string, any>;
}

export function PrivateRouter(props: IProps) {
    const { element: Component, mete = {} } = props;

    React.useEffect(() => {
        if (mete.title) {
            document.title = `${mete.title} - ${Config.title}`;
        } else {
            document.title = Config.title;
        }
    }, [mete]);

    return <Component />;
}
