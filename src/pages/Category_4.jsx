import React from "react";
import Grid from '@mui/material/Grid';


import { Instrument } from "../components/Instrument";

import axios from "axios";


export const Category_4 = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    axios.get(`http://localhost:4444/category_4`).then(res =>{
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
      { <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isLoading ? [...Array(5)] : data).map((data, index)=>
            isLoading ? (
              <Instrument key={index} isLoading={true}/>
            ) : (
            < Instrument 
              id={data._id}
              fullName={data.fullName}
                //createdAt={data.createdAt}
                category={data.category}
                quality={data.quality}
                price={data.price}
                description={data.description}
                isEditable
            />
          ))}
        </Grid>
      </Grid> }
    </>
  );
};
