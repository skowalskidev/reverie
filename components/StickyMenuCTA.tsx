"use client";

import Button from "./Button";

type Props = {
    onClick?: () => void;
}

const StickyMenuCTA = ({ onClick }: Props) => {
    return (
        <div className={`sticky-cta block`}>
            <Button onClick={onClick}>
                Start
            </Button>
        </div>
    );
};

export default StickyMenuCTA;