import React, { Component } from "react";
import ProductItem from "./ProductItem";

class Product extends Component{
    constructor (props){
        super(props);

        this.state={
            totle:0,
    
        }
  
    }


 TotleChangeadd =()=>{
  this.setState({  
 totle:this.state.totle+1  })

        }

     TotleChangedsub =()=> {
       
        if (this.state.totle > 0 ){

            this.setState({
                totle : this.state.totle-1
            });
       
        }
        
    }

     
             
   


    render(){
        let Clothes=[
            {
                id:1,
              src:'./Blouse.jpg'  ,
              type:'Blouse',
              color:'blue',
              price:'20jd'
            },
            {
                id:2,
                src:'dress.jpg',
                type:'dress',
                color:'blue',
                price:'50jd'
            },
            {
                id:3,
               src:'shoes.jpg' ,
               type:'shoes',
               color:'black',
               price:'15jd'
            }
        ];

        const element=Clothes.map((element)=>{
            return <ProductItem
            src={element.src}
            type={element.type}
            color={element.color}
            price={element.price}
            TotleChangeadd={this.TotleChangeadd}
            //  function  (passed function )
            TotleChangedsub={this.TotleChangedsub}
            />
        })

        return(
            <React.Fragment>
                
            <h1> Number of product in cart {this.state.totle}</h1> 
             {element}
             <br></br>
            </React.Fragment>
        );
    }
}

export default Product;