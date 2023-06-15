import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const MyList = ({records, remove, update}) => {
    if(!records[0]) {
        return (
            <h1 style={{textAlign: "center"}}>
                 Заказов нет!
            </h1>
        )
    }

    return (
        <div>
            <TransitionGroup className="post__list">
                <table className="order__table">
                    <thead>
                        <tr className="order__table__row">
                            <td>Имя</td>
                            <td>Email</td>
                            <td>Телефон</td>
                            <td>Статус</td>
                            <td>Текст</td>
                            <td>Выполн.</td>
                            <td></td>
                            <td>Дата поступления</td>
                            <td>Дата выполнения</td>
                        </tr>
                    </thead>
                {records.map(record => (
                    <CSSTransition
                        key={record.id}
                        timeout={100}
                        classNames="order_unit"
                    >
                        <tbody>
                        <PostItem remove={remove} update={update} number={record.id + 1} record = {record} />
                        </tbody>
                    </CSSTransition>
                ))}
                </table>
            </TransitionGroup>
        </div>
    );
};

export default MyList;