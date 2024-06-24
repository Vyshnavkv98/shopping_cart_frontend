import React from 'react'
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProducts from '../components/HorizontalCardProducts';
import { VerticalCardProduct } from '../components/VerticalCardProduct';

const Home = () => {
  return (
    <div className='px-8'>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProducts category={"airpodes"} heading={"Top Airpods"} />
      <HorizontalCardProducts category={"watches"} heading={"Popular Watches"} />

      <VerticalCardProduct category={"mobiles"} heading={"Top smartphones"} />
      <VerticalCardProduct category={"mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"} />
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
      <VerticalCardProduct category={"speaker"} heading={"Bluetooth Speakers"} />
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerators"} />
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
    </div>
  )
}

export default Home;