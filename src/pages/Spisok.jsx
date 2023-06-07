import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Order} from '../components/Order'
import axios from "axios";
import {useParams} from 'react-router-dom'

import { Instrument } from '../components/Instrument';

export const Spisok = () => {
  
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const id = '642db237eabd1dfd8f86a593';

  React.useEffect(()=>{
    axios.get(`http://localhost:4444/order/${id}`).then(res =>{
      setData(res.data);
      setLoading(false);
    }).catch(err=>{
      console.warn(err);
      alert('Ошибка при получении товара');
    });
  }, [])

  if (isLoading) {
    return <Order isLoading={isLoading} isFullInstrument/>;
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
        Стоимость {data.cost}
        <Grid xs={8} item>
        Статус {data.status}
        </Grid>        
        <Grid xs={8} item>
        <Button href="/category" >
          Сделать заказ
        </Button>
        </Grid>
        </Grid>
      </Grid>
    </>
  ); 
};