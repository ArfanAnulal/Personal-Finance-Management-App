import { Typography } from '@mui/material';
import React from 'react';
import mainlogo from '../assets/mainlogo.png';
import '../stylesheets/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={mainlogo} alt='Logo' className="logo" />
      </div>
      <div className="text-container">
        <Typography variant='h3' className="heading" fontFamily={'times'}>The One Stop Shop For All Your Financing Needs</Typography>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sodales orci, non congue enim. Cras eget sapien ut ligula laoreet ultricies. Suspendisse maximus ex sed imperdiet tempor. Nulla in tincidunt nunc, a vulputate neque. Mauris tellus nulla, finibus id maximus vitae, sagittis et lectus. Aliquam quis ultrices neque, sed scelerisque elit. Integer placerat sem et tempus euismod. Suspendisse blandit ullamcorper pharetra. Ut scelerisque lectus non dolor pretium sodales.

          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed elementum, ligula fermentum rhoncus ultricies, nisl dui ullamcorper lacus, id accumsan risus nisl ac enim. Vestibulum sit amet ex risus. Quisque cursus luctus congue. Phasellus vel condimentum eros, eget vestibulum nibh. Proin justo justo, molestie vel ex vitae, euismod malesuada enim. Donec imperdiet elementum pellentesque. Nullam sed sem aliquam, consequat nulla ut, consequat diam. Suspendisse potenti. Ut maximus eu augue non fermentum. Integer bibendum nisi eu odio aliquet venenatis. Mauris eget elit tristique, feugiat dolor sit amet, scelerisque velit. Aliquam erat volutpat. Nulla facilisi. Mauris risus ex, egestas quis nulla at, tempor porta neque.

          Donec et fringilla arcu, varius vestibulum urna.
        </p>
      </div>
    </div>
  );
};

export default Home;