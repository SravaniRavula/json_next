import React, { Component } from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons

import { faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

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
                                <div className={styles.card__image}  > <img  src={service.imgsrc} alt={service.srcname} /></div>
                                <div className={styles.card__content}>
                                    <div className={styles.card__title}><h4>{service.title}</h4></div>
                                    <div className={styles.card__snippet}>{service.description}</div>                               
                                <div className={styles.card__sociallinks}> 
                                        <ul className={styles.card__socialicons}>
                                            <li> <a href={service.urls}  ><FontAwesomeIcon icon={faShare} style={{width:'40px', color: 'ash' }}/> </a></li>
                                            <li> <a href={service.urlf} ><FontAwesomeIcon icon={faFacebook} style={{width:'40px', color: 'blue' }}/></a></li>
                                            <li> <a href={service.urlt} ><FontAwesomeIcon icon={faTwitter} style={{width:'40px',color: 'darkblue' }}/></a></li>
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
