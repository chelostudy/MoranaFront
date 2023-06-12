import React from 'react';
import MyButton from "./UI/buttons/myButton";
import {Link, useNavigate} from 'react-router-dom';
import 'react-router-dom';
import logo from "../img/logo2.png";
import dead from '../img/docent.png';
const PostItem = (props) => {
    return (
                    <tr className="order__table__row">
                        <td className="order__table__cell">{props.record[1].name}</td>
                        <td className="order__table__cell">{props.record[1].email}</td>
                        <td className="order__table__cell">{props.record[1].phone}</td>
                        <td className="order__table__cell"><input type="checkbox"
                                                                  name="languages"
                                                                  value="HTML"
                                                                  checked={props.record[1].order_status}
                                                                  onChange={() => props.update(props.record[1].id)}/></td>
                        <td className="order__table__cell">{props.record[1].order_text}</td>
                        <td className="order__table__cell">{props.record[1].adminId}</td>
                        <td className="order__table__cell">
                            <button style={{background: "rgba(154,2,2,0.47)", height: "100%"}} onClick={() => props.remove(props.record[1].id)}>Удалить</button>
                        </td>
                        <td className="order__table__cell">{(props.record[1].createdAt.replace('.000Z', '').replace('T',' '))}</td>
                        <td className="order__table__cell">{(props.record[1].updatedAt.replace('.000Z', '').replace('T',' '))}</td>
                    </tr>
    );
};

export default PostItem;
