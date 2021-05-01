import React, { Component } from 'react';

import styles from '../styles/Home.module.css'

import data from '../Data/data.json';

class Events extends Component {
	render() {
		return (
            <div>
                {
                  data.Services.map((service) => {
                    return (                        
                       <div className={styles.cards}>
                            <a  className={styles.card}>
                            <div className={styles.card__image}  src={service.imgsrc} alt={service.srcname} ></div>
                            <div className={styles.card__content}>
                                <div className={styles.card__title}><h4>{service.title}</h4></div>
                                <div className={styles.card__snippet}>{service.description}</div>                               
                            <div className={styles.card__sociallinks}> 
					<ul className={styles.card__socialicons}>
					    <li> <a href={service.urls}  ><img src={service.imgsrc1} /></a></li>
					    <li> <a href={service.urlf} ><img src={service.imgsrc2} /></a></li>
					    <li> <a href={service.urlt} ><img src={service.imgsrc3} /></a></li>
					</ul>					
					<span className={styles.card__Button}>{service.button}</span>
					</div>
                            </div>
                            </a>                
			</div>
                                       
                    );
                  })
                } 
		
            </div>

        );
    }
  
} 
export default Events;
