import React,{useState,useEffect} from 'react'

function ShopHomeAppliances() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
      }, []);
  return (
    <h1>ShopHomeAppliances</h1>
  )
}

export default ShopHomeAppliances