import React, { Component } from "react";

class ProductItem extends Component{

constructor(props){
    super(props);

    this.state={
        num:0,
      }
}
  
   
    add = () => {
        // work function inovke
     this.props.TotleChangeadd();
     this.setState({
         num : this.state.num + 1
     })

    };

    Subtract =()=>{
      

        if (this.state.num > 0 ) {
            this.setState({ num: this.state.num - 1 });
            
            this.props.TotleChangedsub();
          }
          
    }
   
   
    render(){
     

        return(
            <React.Fragment>


       
                <div className="container">

                
       
                <div style={{display:'inline-block',marginLeft:'20em'}} >
              <h1 >{this.props.type}</h1>
              <h3 >{this.props.color}</h3>
              <h3 >{this.props.price}</h3>
              </div>

              <div style={{display:'inline-block',marginLeft:'20em'}}>
             <span style={{marginRight:'2em'}} > <button onClick={this.add}>+</button></span>
              <span  style={{marginRight:'2em'}} >{this.state.num}</span>
              <span  style={{marginRight:'2em'}} ><button onClick={this.Subtract}>-</button></span>
              </div>
             
             
              <img src={this.props.src} style={{marginLeft:'20em'}}/>
              
             <br></br>
             </div>
            </React.Fragment>
        )
    }
}

export default ProductItem;