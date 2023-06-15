import React, {useState} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const MyList = ({records, remove, update}) => {
    const [less, setLess] = useState(!window.matchMedia("(min-width: 1150px)").matches)
    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 1150px)").matches) {
            setLess(false)
        } else {
            setLess(true)
        }
    });

    if(!records[0]) {
        return (
            <h1 style={{textAlign: "center"}}>
                 Заказов нет!
            </h1>
        )
    }

    return (
        <div>
            <TransitionGroup>
                <table className="table">
                    <thead>
                    {less
                    ?
                        <tr className="table__row">
                            <td style={{fontWeight: "bold"}}>Имя</td>
                            <td style={{fontWeight: "bold"}}>Телефон</td>
                            <td style={{fontWeight: "bold"}}>Статус</td>
                            <td style={{fontWeight: "bold"}}>Дата поступления</td>
                        </tr>
                    :
                        <tr className="table__row">
                        <td style={{fontWeight: "bold"}}>Имя</td>
                        <td style={{fontWeight: "bold"}}>Email</td>
                        <td style={{fontWeight: "bold"}}>Телефон</td>
                        <td style={{fontWeight: "bold"}}>Статус</td>
                        <td style={{fontWeight: "bold"}}>Текст</td>
                        <td style={{fontWeight: "bold"}}>Выполн.</td>
                        <td style={{fontWeight: "bold"}}></td>
                        <td style={{fontWeight: "bold"}}>Дата поступления</td>
                        <td style={{fontWeight: "bold"}}>Дата выполнения</td>
                        </tr>
                    }
                    </thead>
                {records.slice(0).reverse().map(record => (
                    <CSSTransition
                        key={record.id}
                        timeout={100}
                        classNames="order_unit"
                    >
                        <tbody>
                        <PostItem less={less} remove={remove} update={update} number={record.id + 1} record = {record} />
                        </tbody>
                    </CSSTransition>
                ))}
                </table>
            </TransitionGroup>
        </div>
    );
};

export default MyList;