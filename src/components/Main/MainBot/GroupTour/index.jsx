import React,{useState} from 'react';
import {withRouter} from 'react-router';
import { Row, Col } from 'antd';
import './stytes.css';
function GroupTour({
   groupIndex,
   id,
   image,
   place,
   name,
   day,
   transports,
   descriptions,
   price,
   cartTourIndexData,
   setCartTourIndexData,
   history,
            
}){
   //vận chuyển
   const renderTransports = () => {
      return transports.map((item, index)=>{
         return(
            <img src={item.transport} style={{marginRight:'8px'}}/>
         );
      })
   }

   //thông tin tour
   const renderDesriptions = () => {
      return descriptions.map((item, index)=>{
         return(
            <p style={{padding:'0', margin:'0'}}>- {item.description}</p>
         );
      })
   }

   //chọn tour
   const cartTourObject = function(id, image, name, price){
      this.id = id;
      this.image = image;
      this.name = name;
      this.price = price;
   }
   const handleSelectGroup=()=>{
      let keySelect = localStorage.getItem('keySelect');
      const selectName = localStorage.getItem(id);
      if(selectName === null){
         keySelect = (keySelect === null) ? id :  keySelect + ',' + id;
         localStorage.setItem('keySelect', keySelect);

         const cartTour = new cartTourObject(id, image, name, price);
         const json = JSON.stringify(cartTour);
         localStorage.setItem(id,json);
      }
      if(cartTourIndexData.findIndex((data) => data.id === id) === -1){
         setCartTourIndexData([
            ...cartTourIndexData,
               id
               
         ]);
      }
   }

   return(
      <Col span={8}
         className="tour-top-padding"
         onClick={()=>{handleSelectGroup(); history.push(`/tour-travel/${id}`)}}>
         <Row 
         className="row box-hover box-tour">
            <Col span={24}>
               <Row>
                  <Col span={24}>
                     <img src={image} className="image-tour" alt="logo" />
                  </Col>
                  <Col span={24} className="gly-map-marker">
                     <span>
                        <img src="https://img.icons8.com/offices/18/000000/marker.png"/>
                     </span>
                     <div className="place-tour">{place}</div>
                  </Col>
               </Row>
            </Col>
            <Col span={24}>
               <Row  className="surround-name">
                  <Col span={24} className=" name-tour">
                     <span>{name}</span>
                  </Col>
                  <Col span={24}>
                     <Row>
                        <Col span={12}>
                           <img src="https://img.icons8.com/material-rounded/14/000000/time-machine.png"/>
                           <span className="day-bot-tour">{day}</span>
                        </Col>
                        <Col span={12} >
                           <span className="transports-tour">{renderTransports()}</span>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24} className="desription-tour">
                     {renderDesriptions()}
                  </Col>
                  <Col span={24}>
                     <span className="price-bot-tour">
                        {price}
                        <small className="unit-bot-tour">VND</small>
                     </span>
                  </Col>
               </Row>
            </Col>
         </Row>
         </Col>
)}
export default withRouter(GroupTour);

