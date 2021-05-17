import React from 'react'

const Test=()=>{
   return(
       <div>
           <h1 className="bg-black">Hello World</h1>

           <h6>{this.state.description}</h6>
                    <img src={this.state.poster_path} alt="" />
                    <h1>Date:{this.state.release_date}</h1>
                    <h1>{this.state.title}</h1>
       </div>
   )
}
export default Test;

