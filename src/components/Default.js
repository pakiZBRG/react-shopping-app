import React from 'react'

class Default extends React.Component {
   render() {
      console.log(this.props)
      return (
         <div className='container'>
            <div className='row'>
               <div className='col-10 mx-auto text-center text-title pt-5'>
                  <h1 className='display-3'>404: Page Not Found</h1>
                  <h2>Invalid URL address (<span className='font-weight-bold'>{this.props.location.pathname}</span> not found)</h2>
               </div>
            </div>
         </div>
      )
   }
}

export default Default