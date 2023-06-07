import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { Instrument } from '../components/Instrument';
import { Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import {useForm} from 'react-hook-form'
import styles from "./Login/Login.module.scss";
import { Description } from '@mui/icons-material';
import axios from "axios";

export const NovTovar = () => {
  const dispatch = useDispatch();
  const {
    // categoryIns,
    // descriptionIns,
    // priceIns,
    // quantityIns,
    // fullNameIns, 
    register,
    watch,
    handleSubmit, 
    setError, 
    formState: {errors},
  } = useForm({
    // defaultValues: {
    //   categoryIns: 'Духовые инструменты',
    //   descriptionIns: 'Духовые инструменты',
    //   priceIns: 5000,
    //   quantityIns: 55,
    //   fullNameIns: 'Флейта',
    //   //image_instrument: 'http://localhost:4444/instrument'
    // },
    mode: 'onChange'
  });

  const fullNameIns = watch('fullNameIns');
  const categoryIns = watch('categoryIns');
  const descriptionIns = watch('descriptionIns');
  const priceIns = watch('priceIns');
  const quantityIns = watch('quantityIns');

  const onSubmit = (data)=>{
    axios.post(`http://localhost:4444/instrument`, {
      category: data.categoryIns,
      description: data.descriptionIns,
      price: data.priceIns,
      quantity: data.quantityIns,
      fullName: data.fullNameIns,
      image_instrument: "http://localhost:4444/"
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
    
    
   };
  
  return (
    <Paper classes={{ root: styles.root }}>
      <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        className={styles.field}
        label="Название"
        
        {... register('fullNameIns')}
        fullWidth
      />
            <TextField
        className={styles.field}
        label="Стоимость"
        
        {... register('priceIns')}
        fullWidth
      />
            <TextField
        className={styles.field}
        label="Описание"
        
        {... register('descriptionIns')}
        fullWidth
      />
            <TextField
        className={styles.field}
        label="Категория"
        
        {... register('categoryIns')}
        fullWidth
      />
            <TextField
        className={styles.field}
        label="Количество"
        
        {... register('quantityIns')}
        fullWidth
      />
       {/* <TextField
        className={styles.field}
        label="Изображение"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {... register('image', {required: 'Укаажите изображение'})}
        fullWidth
      /> */}
            <Button type="submit" size="large" variant="contained">
                Сохранить
            </Button>
      </form>
       
    </Paper>
  ); 
};