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
                        <tr>
                            <td>Имя</td>
                            <td>Номер</td>
                            <td>Почта</td>
                            <td>Статус</td>
                            <td>Текст</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                {records.map(record => (
                    <CSSTransition
                        key={record.id}
                        timeout={100}
                        classNames="post"
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