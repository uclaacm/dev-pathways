import React from 'react';
import bulletpoints from '../../data/bulletpoints';
import './VisitResourcePage.css'

function Resourcepage (props) {
  var arr1 = [];
  var arr2 = [];
  var icon;
  var color;
  var link;
  for(const committee of bulletpoints)
  {
    if(committee['category'] === props.name)
    {
      arr1 = committee['bullets1'];
      arr2 = committee['bullets2'];
      icon = committee['icon'];
      color = committee['color'];
      link = committee['resource_page_link'];
    }
  }
  return (
    <div>
    <span className='sub-box-1'>
      <img className='logo' src={icon} alt="logo"/>
      <a href={link} target="_blank" rel="noreferrer">
        <button className='button' style={{color:color,borderColor:color}}>Resource Page</button>
      </a>
    </span>
  <div className='box'>
  <br/>
  <p className='intro'>Checkout ACM {props.name}’s resource page for their previous workshops! Topics covered include:</p>
  <div className='sub-box-2'>
    <div className='info'>
      {arr1.map(bullet => {
      return <li>{bullet}</li>;
      })}
    </div>
    <div className='info'>
      {arr2.map(bullet =>{
        return <li>{bullet}</li>
      })}
    </div>
  </div>
  </div>
  </div>
  );
}

export default Resourcepage;