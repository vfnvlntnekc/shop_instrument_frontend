import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import { selectIsAuthManager, logoutManager } from '../../redux/slices/authManager';

export const Header = () => {
  const dispatch = useDispatch();
  const dispatchManager = useDispatch();

  const isManager = useSelector(selectIsAuthManager);
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?'))
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  const onClickLogoutManager = () => {
    if (window.confirm('Вы действительно хотите выйти?'))
    dispatchManager(logoutManager());
    window.localStorage.removeItem('token');
  };

  return (
    (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          {<a className={styles.logo}>
            <div>Симфония</div>
          </a>
          }
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/category">
                  <Button variant="outlined">Категории</Button>
                </a>
                <a href="/catalog">
                  <Button variant="outlined">Каталог</Button>
                </a>
                <a href="/spisok">
                  <Button variant="outlined">Корзина</Button>
                </a>
                <a href="/category">
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
                </a>
              </>
            ) :
            isManager ? (
              <>
                <a href="/tovar">
                  <Button variant="outlined">Товары</Button>
                </a>
                <a href="/Zakaz1">
                  <Button variant="outlined">Заказы</Button>
                </a>
                <a href="/category">
                <Button onClick={onClickLogoutManager} variant="contained" color="error">
                  Выйти
                </Button>
                </a>
              </>
            ) : 
            (
              <>
                <a href="/category">
                  <Button variant="outlined">Категории</Button>
                </a>
                <a href="/catalog">
                  <Button variant="outlined">Каталог</Button>
                </a>
                <a href="/login">
                  <Button variant="outlined">Войти (для пользователя)</Button>
                </a>
                <a href="/log">
                  <Button variant="outlined">Войти (для менеджера)</Button>
                </a>
                <a href="/register">
                  <Button variant="outlined">Создать аккаунт</Button>
                </a>
              </>
            )}
            
          </div>
        </div>
      </Container>
    </div>)
  );
};