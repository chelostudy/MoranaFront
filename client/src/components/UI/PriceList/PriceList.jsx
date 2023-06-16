import React, {useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PriceList = (updatePrices, prices) => {
    const [val, setVal]=useState('')
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
                            {console.log(prices)}
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

export default PriceList;


