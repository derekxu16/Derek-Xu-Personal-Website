import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default function Tile(props) {
    return (
        <div style={{ display:'flex', flex:'auto', backgroundColor: props.color }}>
            <div className='vertical-center-container' style={{width:200, textAlign:'center'}}>
                <Header as='h1' className='tile-header'>{props.name}</Header>
                <p style={{ fontSize: 12, textAlign: 'center' }}> {props.message} </p>
            </div>
        </div>
    )
}