import React, {useState} from 'react';
import backImg from '../img/background_for_hello1.png'
import RegisterForm from "../components/RegisterForm";
import MyModal from "../components/UI/MyModal/MyModal";
import service from "../services/OrderService"
import OrderForm from "../components/UI/OrderForm/OrderForm";

const About = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <OrderForm setVisible={setModalVisible} action={service.registerOrder}/>
            </MyModal>

            <div className="main_blocks first_block">
                <div className="wrapper">
                    <h1 style={{fontWeight:"bold"}}>Товарный бетон в Ростове-на-Дону</h1>
                    <h2>От 3000рублей/куб</h2>
                    <button className="order_btn" onClick={() => setModalVisible(true)}>Заказать</button>
                </div>
            </div>
        </div>
    );
};

export default About;