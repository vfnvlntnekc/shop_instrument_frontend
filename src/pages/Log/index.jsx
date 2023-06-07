import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form'
import styles from "./Log.module.scss";
import { fetchAuthManager, selectIsAuthManager, fetchAuthMeManager } from '../../redux/slices/authManager';

export const Log = () => {

  const isAuth = useSelector(selectIsAuthManager);

  const dispatchManager = useDispatch();
  const {
    register, 
    handleSubmit, 
    setError, 
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      fullName: '1q2w3e4r',
      password: '1q2w3e4r',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values)=>{
    const data = await dispatchManager(fetchAuthManager(values));

    if (!data.payload){
      return alert('Не удалось авторизоваться!');
    }
    
    if ('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);
    }
  };
  //console.log(isManager);


  if (isAuth){
    return <Navigate to="/novtovar"/>
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="Имя"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {... register('fullName', {required: 'Укаажите имя'})}
        fullWidth
      />
      <TextField 
      className={styles.field} 
      label="Пароль" 
      helperText={errors.password?.message}
      error={Boolean(errors.password?.message)}
      { ... register('password', {required: 'Укажите пароль'})}
      fullWidth 
      />
      <a href="/novtovar">
      <Button type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>                
      </a>
      
      </form>
    </Paper>
  );
};