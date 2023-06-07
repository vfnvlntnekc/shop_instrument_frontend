import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import axios from '../axios';
import Button from '@mui/material/Button';

import { Instrument } from '../components/Instrument';
import { fetchInstrument, fetchTags } from '../redux/slices/instrument';

export const Tovar = () => {
  const dispatch = useDispatch();
  const {instrument, tags} = useSelector((state) => state.instrument);

  const isInstrumentLoading = instrument.status==='loading'

  React.useEffect(()=>{
      dispatch(fetchInstrument());
      dispatch(fetchTags());
  }, []);

  return (
    <>
      { <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isInstrumentLoading ? [...Array(5)] : instrument.items).map((obj, index)=>
            isInstrumentLoading ? (
              <Instrument key={index} isLoading={true}/>
            ) : (
            < Instrument 
                  id={obj._id}
                  fullName={obj.fullName}
                  //createdAt={obj.createdAt}
                  category={obj.category}
                  quality={obj.quality}
                  price={obj.price}
                  description={obj.description}
                  isEditable
            />
          ))}
        </Grid>
      </Grid> }
      <a href="/novtovar">
        <Button>
        Добавить товар
        </Button>
      </a>
        
    </>
  );
};


// import React from "react";
// import Button from "@mui/material/Button";
// import {useParams} from 'react-router-dom'

// import { Instrument } from "../components/Instrument";
// import axios from "axios";

// export const Tovar = () => {
//   const [data, setData] = React.useState();
//   const [isLoading, setLoading] = React.useState(true);

//   const {id} = useParams();

//   function addToCart(id) {
//     axios.patch(`http://localhost:4444/order/${id}`)
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   React.useEffect(()=>{
//     axios.get(`http://localhost:4444/instrument/${id}`).then(res =>{
//       setData(res.data);
//       setLoading(false);
//     }).catch(err=>{
//       console.warn(err);
//       alert('Ошибка при получении товара');
//     });
//   }, [])

//   if (isLoading) {
//     return <Instrument isLoading={isLoading} isFullInstrument/>;
//   }


//   return (
//     <>
//       <Instrument
//         id={data._id}
//         fullName={data.fullName}
//         //createdAt={data.createdAt}
//         category={data.category}
//         quality={data.quality}
//         price={data.price}
//         description={data.description}
//         isFullInstrument
//       />
//     <Button
//     onClick={() => addToCart(id)}> Добавить товар
//     </Button>
//     </>
//   ); 
// };