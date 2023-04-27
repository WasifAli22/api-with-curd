"use client"
import { useState } from "react";
const [filterText,setFilterText]=useState('')
const [inStockOnly,setInStockOnly]=useState(false)

function SearchBar({filterText,inStockOnly}){
    return (
        <form>
            <input type="text" value={filterText} />
            <label>
                <input type="checkbox" checked={inStockOnly} />
                {''}
                only show products in the stock
            </label>
        </form>
    )
}

function ProductTable(filterText,inStockOnly,products) {
    const rows=[]
    let lastCategory=null;
    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            )===-1
            ) {
            return
        }
    });

}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  export default function App(){
    return 
  }