import React from 'react';
import {Loader} from 'shared/ui';

export const Loading = () => {
    return (
        <Loader
            fill="#869F9F"
            className="!transform[-50%,-50%] !fixed !left-[50%] !top-[51%] !z-50 text-color-primaryText"
            text="Učitavanje..."
            variant="contained"
            size="md"
            color="secondary"
            textClassName="text-background-secondary z-50 transform[-60%,-53%] fixed left-[53%] top-[51%] ml-5"
        />
    );
};
