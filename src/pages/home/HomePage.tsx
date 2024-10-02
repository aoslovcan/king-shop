import React from 'react';
import {Button, Loading} from "shared/ui";
import {ArrowRightIcon, CloseIcon} from "../../shared/assets/icons";

export const HomePage = () => {
    return <h3 className="font-primary text-3xl font-bold">This is home page

        <Button label="DETALJI" iconAfter={<ArrowRightIcon/>} variant="contained" color="primary" size="md"/>
        <Button label="DETALJI" variant="contained" color="secondary" size="base"/>
        <Button label="DETALJI" variant="contained" color="warning" size="base"/>

        <Button label="" iconAfter={<CloseIcon/>} variant="contained" color="warning" size="base"/>
        <Button label="" isLoading={true} iconAfter={<CloseIcon/>} variant="contained" color="warning" size="base"/>

        <Loading/>
    </h3>;
};
