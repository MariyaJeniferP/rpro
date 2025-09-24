import React, { useState } from "react";

function SortedList(){
    const [sort, setSort] = useState();
    const products=[
        { id: 1, name: "Perfume", price: 500},
        { id: 2, name: "Shoes", price: 1200},
        { id: 3, name: "Notebook", price: 80},
        { id: 4, name: "Pen", price: 30},
        { id: 5, name: "Backpack", price: 150},
    ];
    const Button1=()=>{
        setSort(sortedProducts)
    }
    const sortedProducts=[...products].sort((a,b) => b.price-a.price);

    return(
        <>
       
        <div>
            <h2>Products Sorted by Price(High to low)</h2>
            <ul>
                {sortedProducts.map((sortlist)=>(
                    <li key={SortedList.id}>
                        {sortlist.name}-₹{sortlist.price}
                    </li>
                ))}
            
            </ul>
            <h3>{sort}</h3>
            <button style={{backgroundColor:"yellow"}} onClick={Button1}>Find</button>
        </div>
        </>
    );
}
export default SortedList