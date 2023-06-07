import React from "react";
import Button from "@mui/material/Button";
import {useParams} from 'react-router-dom'

import { Instrument } from "../components/Instrument";
import axios from "axios";

export const FullInstrument = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  const {id} = useParams();

  function addToCart(id) {
    axios.patch(`http://localhost:4444/order/647e55ba61779985bb44253d`, {
      productId:id
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  React.useEffect(()=>{
    axios.get(`http://localhost:4444/instrument/${id}`).then(res =>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      console.warn(err);
      alert('Ошибка при получении товара');
    });
  }, [])

  if (isLoading) {
    return <Instrument isLoading={isLoading} isFullInstrument/>;
  }


  return (
    <>
      <Instrument
        id={data._id}
        fullName={data.fullName}
        //createdAt={data.createdAt}
        category={data.category}
        quality={data.quality}
        price={data.price}
        description={data.description}
        isFullInstrument
      />
      <Button
      onClick={() => addToCart(id)}> Добавить в корзину
      </Button>
    </>
  ); 
};