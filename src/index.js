import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';
import {robots} from './robots.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Card id = {robots[0].id} name = {robots[0].username} email =  {robots[0].email} />
    <Card id = {robots[1].id} name = {robots[1].username} email =  {robots[1].email} />
    <Card id = {robots[2].id} name = {robots[2].username} email =  {robots[2].email} />
    <Card id = {robots[3].id} name = {robots[3].username} email =  {robots[3].email} />
    <Card id = {robots[4].id} name = {robots[4].username} email =  {robots[4].email} />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
