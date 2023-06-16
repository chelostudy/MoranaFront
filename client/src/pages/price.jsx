import React from 'react';
import BlockM from "../components/UI/blockM/blockM";
import goods1 from "../img/goods1.png"
import goods3 from "../img/goods3.png"
import goods4 from "../img/goods4.png"

const Price = () => {
    return (
        <div className="wrapper" style={{marginTop:"50px"}}>
            <h3>На этой странице показан весь перечень предоставляемых нами услуг.</h3>
        <div className="test" style={{ display: "flex", flexWrap:"wrap", flexDirection:"row", justifyContent:"space-between"}}>
            <div><h3>Бетон</h3><img src={goods1}/><BlockM catId="1"/></div>
            <div><h3>Блоки</h3><img src={goods4}/><BlockM catId="4"/></div>
            <div><h3>Доставка</h3><img src={goods3}/><BlockM catId="3"/></div>
        </div>
        </div>
    );
};

export default Price;