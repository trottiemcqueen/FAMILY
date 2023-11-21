import React from 'react';
import Card from '../Card';

const CardList = ( {Family} ) => {
  return (
    <div>
          {
            Family.map((user, i) => {
              return (
              <Card 
                  key={i} 
                  id={Family[i].id} 
                  name={Family[i].name} 
                  email={Family[i].email} 
                />
              );
            })
          }
    </div>
    
  )
}

export default CardList;