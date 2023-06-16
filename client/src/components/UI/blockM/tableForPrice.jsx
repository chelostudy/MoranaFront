import React from 'react';

const TableForPrice = (prices, nameText, costText, title) => {
    return (
        <div>
            <h2>`Стоимость ${title}`</h2>
            <table>
                <thead>
                <tr>
                    <td>Наименование</td>
                    <td>Стоимость</td>
                </tr>
                </thead><tbody>
            {prices.map(record => (
                <tr className="table__row">
                    <td>{record[1].name}nameText</td>
                    <td>{record[1].cost}costText</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    );
};

export default TableForPrice;