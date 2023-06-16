import React, {useState} from 'react';
import backImg from '../img/background_for_hello1.png'
import RegisterForm from "../components/RegisterForm";
import MyModal from "../components/UI/MyModal/MyModal";
import service from "../services/OrderService"
import OrderForm from "../components/UI/OrderForm/OrderForm";
import whyUs from "../img/whyUs1.png"
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const About = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <OrderForm setVisible={setModalVisible} action={service.registerOrder}/>
            </MyModal>

            <div className="main_blocks first_block">
                <div className="first_block__wrapper">
                    <div>
                        <h1 style={{fontWeight:"bold"}}>Товарный бетон в Ростове-на-Дону</h1>
                        <h2>От 3000рублей/куб</h2>
                    </div>
                    <div>
                        <button className="order_btn" onClick={() => setModalVisible(true)}>Заказать</button>
                    </div>
                </div>
            </div>
            <div className="main_blocks second_block">
                <div className="wrapper">
                    <div>
                        <h2 style={{fontWeight:"bold"}}>Почему именно мы?</h2>
                    </div>
                    <div className="place">
                        <div><img src={whyUs}/><h2>Качество ГОСТ</h2></div>
                        <div><img src={whyUs}/><h2>Сотни довольных клиентов</h2></div>
                        <div><img src={whyUs}/><h2>15 лет на рынке</h2></div>
                    </div>
                </div>
            </div>
            <div className="main_blocks fourth_block">
                <div className="wrapper">
                    <div>
                        <h1 style={{fontWeight:"bold"}}>Товарный бетон в Ростове-на-Дону</h1>
                        <h2>От 3000рублей/куб</h2>
                    </div>
                    <div>
                        <button className="order_btn" onClick={() => setModalVisible(true)}>Заказать</button>
                    </div>
                </div>
            </div>
            <div className="main_blocks fifth_block">
                <div className="wrapper">
                    <OrderForm>

                    </OrderForm>
                </div>
            </div>
            <div className="main_blocks sixth_block">
                <YMaps>
                        <Map className="map" defaultState={{  center: [47.283942, 39.684083], zoom: 16 }}>
                        <Placemark geometry={[47.283942, 39.684083]} />
                        </Map>
                </YMaps>
            </div>


        </div>
    );
};

export default About;