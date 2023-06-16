import React, {useEffect, useState} from 'react';
import PriceService from "../../../services/PriceService";
import OrderService from "../../../services/OrderService";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import price from "../../../pages/price";
import TableForPrice from "./tableForPrice";
import MyList from "../../MyList";



const BlockM = (catId) => {



        useEffect(() => {
            getPrices(catId)
        }, []);
        // ...

    const [prices, setPrices]=useState([])
    console.log(catId.catId,"ebis")
    async function getPrices(id) {
        try {
            const response = await PriceService.getPricesByCat(catId.catId);

            let result = [];
            for(let i in response.data)
                result.push([i, response.data[i]]);
            setPrices(result);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <TransitionGroup>
                    <table className="table">
                        <thead>
                            <tr className="table__row">
                                <td style={{fontWeight: "bold"}}>Наименование</td>
                                <td style={{fontWeight: "bold"}}>Стоимость</td>
                            </tr>
                        </thead>
                        {prices.map(record => (
                            <CSSTransition
                                key={record.id}
                                timeout={100}
                                classNames="order_unit"
                            >
                                <tbody>
                                <tr className="table__row">
                                    <td>{record[1].name}</td>
                                    <td>{record[1].cost}</td>
                                </tr>
                                </tbody>
                            </CSSTransition>
                        ))}
                    </table>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default BlockM;

//<TableForPrice prices={orders} nameText={''} costText={" за кубометр"} title={"бетона"}/>