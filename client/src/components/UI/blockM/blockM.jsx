import React from 'react';
import PriceService from "../../../services/PriceService";
import {parseResponse} from "../../../utils/parseResponse";



const prices = parseResponse(PriceService.getPrices())


const BlockM = () => {
    return (
        <div>
            {prices}
        </div>
    );
};

export default BlockM;