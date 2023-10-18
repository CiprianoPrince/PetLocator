import React, { ReactNode, useEffect, useState } from 'react';
import Button from './Button';
import { ButtonProps } from './Button';

export interface ButtonWithLoadingProps extends ButtonProps {
    loading?: ReactNode;
    onClick: () => Promise<void>;
}

const LoadingAnd3Dot = () => {
    const [dots, setDots] = useState('');
    const [toIncrement, setToIncrement] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => {
                if (toIncrement) {
                    if (prevDots.length === 2) {
                        setToIncrement(false);
                    }
                    return prevDots + '.';
                } else {
                    if (prevDots.length === 1) {
                        setToIncrement(true);
                    }
                    return prevDots.slice(0, -1);
                }
            });
        }, 250);

        return () => {
            clearInterval(intervalId);
        };
    }, [toIncrement]);

    return (
        <span
            className={`relative before:absolute before:content-['${dots}'] before:right-0 before:translate-x-full`}
        >
            Loading
        </span>
    );
};

const ButtonWithLoading = ({
    children,
    loading = <LoadingAnd3Dot />,
    onClick,
    ...props
}: ButtonWithLoadingProps) => {
    const [isloading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
    };

    useEffect(() => {
        if (!isloading) return;
        const fn = async () => {
            await onClick();
            setIsLoading(false);
        };
        fn();
    }, [isloading, onClick]);
    return (
        <Button onClick={handleClick} {...props}>
            {isloading ? loading : children}
        </Button>
    );
};

export default ButtonWithLoading;
