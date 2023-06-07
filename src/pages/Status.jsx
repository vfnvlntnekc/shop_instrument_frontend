import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Instrument } from '../components/Instrument';


export const Status = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            < Instrument 
                  fullName={"Гитара"}
                  isEditable
            />
            < Instrument 
                  fullName={"Скрипка"}
                  isEditable
            />
            < Instrument 
                  fullName={"Барабан"}
                  isEditable
            />
            <Typography  variant="h5">
                Статус:
            </Typography>
            <TextField  label="" fullWidth />
            <Button>
                Сохранить
            </Button>
            <Button>
                Удалить
            </Button>
        </Grid>
      </Grid>
    </>
  ); 
};