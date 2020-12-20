/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';

const Details = (props) => {
    console.log('props',props)
    const {detail} = props;
    if(!detail){
        return null;
    }
    return (
        <div className="border">
            <div className="border2">
                <img src={props.detail.company_logo} />
                <h2>{props.detail.title}</h2>
            </div>
            <a href={props.detail.company_url}>{props.detail.company_url}</a>
            <p>{props.detail.created_at}</p>
            <i className="viewjob-labelWithIcon-icon1 fas fa-building"></i>{props.detail.company}
            <div>
            <i className="viewjob-labelWithIcon-icon fas fa-map-marker-alt"></i>{props.detail.location}
            </div>
            <p dangerouslySetInnerHTML={ {__html: props.detail.how_to_apply }}></p>
            <p dangerouslySetInnerHTML={ {__html: props.detail.description }}></p>
        </div>
    );
};

export default Details;