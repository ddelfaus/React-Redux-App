import React from 'react';
import { useEffect } from 'react'
import { connect} from 'react-redux'
import Server from './Server'
import {fetchServers} from '../Actions'



const Serverlist = (props) => {

    console.log(props, "serverlist")
    useEffect(() => {
        props.fetchServers();
      }, []);
    
      if (props.isFetching) {
        
        return <h2>Loading Cat Facts...</h2>;
      }
    
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.servers.map(item => (
        <Server  key ={item.data} server ={item} />
      ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        servers: state.servers,
        isFetching: state.isFetching,
        error: state.error
    }
   



}

export default connect(mapStateToProps, {fetchServers})(Serverlist);