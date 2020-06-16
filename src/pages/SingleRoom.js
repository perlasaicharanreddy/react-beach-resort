import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=RoomContext;
    render() {
        const {getRoom}=this.context
        const room=getRoom(this.state.slug)
        if(!room){
            return (<div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">
                back to rooms
            </Link>
            </div>)
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        const [mainImg,...defaultImg]=images;
        return(
        <>
        <StyledHero img={mainImg ||this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
        <div className="single-room-images">
        {defaultImg.map((item)=><img src={item} alt={name}/>)}
        </div>
        <div className="single-room-info">
        <article className="desc">
        <h3>details</h3>
        <p>{description} </p>
        </article>
        <article className="info">
        <h3>info</h3>
        <h6>price:${price}</h6>
        <h6>size:{size}SQFT </h6>
        <h6>Max Capacity :{capacity===1 ?`${capacity} Person` : `${capacity} People`} </h6>
        <h6>{pets ? "pets allowed":"no pets allowed"}</h6>
        <h6>{breakfast && "Free breakfast"}</h6>

        </article>

        </div>
        </section>
        <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
        {extras.map(item=><li>-{item}</li>)}

        </ul>
        

        </section>
        </>
        );

    }
}
