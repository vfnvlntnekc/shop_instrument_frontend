import React from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { fetchRegister, selectIsRegister } from '../../redux/slices/auth';


import styles from './Login.module.scss';

export const Registration = () => {

  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const {
    register, 
    handleSubmit, 
    setError, 
    formState: {errors,isValid},
  } = useForm({
    defaultValues: {
      fullName:'',
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values)=>{
    const data = await dispatch(fetchRegister(values));
    
    if (!data.payload){
      return alert('Не удалось зарегистрироваться!');
    }
    
    if ('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);

    }
  };

  if (isAuth){
    return <Navigate to="/novtovar"/>
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
      error={Boolean(errors.fullName?.message)}
        helperText={
          errors.fullName?.message}
        {... register('fullName', {required: 'Укаажите имя'})}
        className={styles.field} 
        label="Полное имя" 
        fullWidth />
      <TextField 
      error={Boolean(errors.email?.message)}
        helperText={
          errors.email?.message}
        {... register('email', {required: 'Укаажите почту'})}
        className={styles.field} 
        label="E-Mail" 
        fullWidth />
      <TextField 
      error={Boolean(errors.password?.message)}
        helperText={
          errors.password?.message}
        {... register('password', {required: 'Укаажите пароль'})}
        className={styles.field} 
        label="Пароль" 
        fullWidth />
      <Button disabled={! isValid} type="submit" size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
      </form>
    </Paper>
  );
};
