import React, { Component } from 'react'
import { RoomContext } from '../context'
import Title from "../components/Title"
import Loading from './Loading'
import Room from './Room'


export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    render() {
        //const value=this.context;
        //const {name,greeting}=this.context;
        let {loading,featuredRooms:rooms}=this.context;
        rooms=rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        });
        //console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"></Title>
                <div className="featured-rooms-center">
                    {loading? <Loading/>:rooms}
                </div>
            </section>
        )
    }
}
