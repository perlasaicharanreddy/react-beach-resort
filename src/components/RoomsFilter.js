import React from 'react'
import {useContext} from 'react'
import {RoomContext, RoomConsumer} from '../context'
import Title from '../components/Title'
//get all unique values
const getUnique=(item,value)=>{
    return [...new Set(item.map(item=>item[value]))]
}

export default function RoomsFilter() {
    const context=useContext(RoomContext)
    console.log(context)
    const {handleChange,rooms,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context
    //get unique types
    let types=getUnique(rooms,'type')
    //add all
    types=['all',...types]
    //map to jsx
    types=types.map((item,index)=><option value={item} key={index}>{item}</option>)

    //people
    let people=getUnique(rooms,'capacity')
    people=people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>

    })

    return (
        <section className="filter-container">
        <Title title="search rooms"/>
        <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
        <label htmlFor="type">room type</label>
        <select 
        name="type" 
        id="type"
        value={type}
        className="form-control"
        onChange={handleChange}
        >
        {types}
        </select>
        </div>

        {/* guests*/}
        <div className="form-group">
        <label htmlFor="capacity">Guests</label>
        <select 
        name="capacity" 
        id="capacity"
        value={capacity}
        className="form-control"
        onChange={handleChange}
        >
        {people}
        </select>
        </div>

       
        {/* guests*/}
        <div className="form-group">
        <label htmlFor="price">room price ${price}</label>
        <input type="range" name="price" min={minPrice} max={maxPrice} 
        id="price"
        value={price}
        className="form-control"
        onChange={handleChange}/>
        </div>


         {/* size*/}
         <div className="form-group">
        <label htmlFor="size">room size </label>
        <div className="size-inputs">
        <input type="number" name="minSize" id="size" 
        value={minSize} className="size-input" onChange={handleChange}/>

        <input type="number" name="maxSize" id="size" 
        value={maxSize} className="size-input" onChange={handleChange}/>
        </div>
        </div>


        {/*extras */}
        <div className="form-group">
            <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" value={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
            </div>

            <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" value={pets} onChange={handleChange}/>
            <label htmlFor="pets">pets</label>
            </div>

            
        </div>






        </form>
        </section>
    );
}
