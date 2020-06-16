import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from "../components/Title"
export default class Services extends Component {
    state={
        services:[
        {
        icon:<FaCocktail/>,
        title:"free cocktail",
        info:"Lorem Ipsum is simply dummy text of the  Lorem Ipsum has been the  standard  "
       },
       {
        icon:<FaHiking/>,
        title:"End less Hacking",
        info:"Lorem Ipsum is simply dummy text of the  Lorem Ipsum has been the  standard  "
       },
       {
        icon:<FaShuttleVan/>,
        title:"free shuttle",
        info:"Lorem Ipsum is simply dummy text of the  Lorem Ipsum has been the  standard  "
       },
       {
        icon:<FaBeer/>,
        title:"Strongest beer",
        info:"Lorem Ipsum is simply dummy text of the  Lorem Ipsum has been the  standard  "
       }
]}
    render() {
        return (
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
            {this.state.services.map((item)=>{
                return(
                    <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>

                    </article>

                );
            })}
            </div>
            
            </section>
        )
    }
}