import React from 'react';
import PriceService from "../../../services/PriceService";
import {parseResponse} from "../../../utils/parseResponse";
import OrderService from "../../../services/OrderService";
import {CSSTransition} from "react-transition-group";
import PostItem from "../../PostItem";
import price from "../../../pages/price";

let prices;

async function getPrices() {
    try {
        const response = await PriceService.getPrices();
        let result = [];
        for(let i in response.data)
            result.push([i, response.data[i]]);
        prices = result;
    } catch (e) {
        console.log(e);
    }
}

getPrices()


const BlockM = () => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </thead><tbody>
                {prices.map(record => (

                    <tr className="table__row">
                        <td>{record[1].name}</td>
                        <td>{record[1].email}</td>
                        <td>{record[1].phone}</td>
                        <td><input type="checkbox"
                                   name="languages"
                                   value="HTML"
                                   checked={props.record[1].order_status}
                                   onChange={() => props.update(props.record[1].id)}/></td>
                        <td>{record[1].order_text}</td>
                        <td>{record[1].adminId}</td>
                        <td>
                            <button style={{background: "rgba(154,2,2,0.47)", height: "100%"}} onClick={() => props.remove(props.record[1].id)}>Удалить</button>
                        </td>
                        <td>{(record[1].createdAt.replace('.000Z', '').replace('T',' '))}</td>
                        <td>{(record[1].updatedAt.replace('.000Z', '').replace('T',' '))}</td>
                    </tr>

                ))}
            </tbody>
            </table>


        </div>
    );
};

export default BlockM;