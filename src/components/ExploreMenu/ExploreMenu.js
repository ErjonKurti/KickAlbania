import React from 'react'
import { brand_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  
  
  
    return (
    <div className='explore-brand' id='explore-brand' >
        <h1> Explore our brands</h1>
        <p className='explore-brand-text'> Browse our diverse selection of stylish and comfortable shoes for every occasion.
        "Find the perfect pair from our wide range of stylish and comfortable shoes.</p>
        <div className='explore-brand-list'>
            {brand_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.brand_name?"All":item.brand_name)} key={index} className='explore-brand-list-item'>
                        <img className={category===item.brand_name?"active":""} src={item.brand_image} alt='' />
                        <p>{item.brand_name}</p>
                    </div>
                )
})}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu