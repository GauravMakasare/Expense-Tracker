import React, { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {

    state = {  
        isLoading : true,
        Categories : []
    }

    //there are two ways to send a request
    //sync - send and wait for the response 
    //async - send and we do not have to keep waiting for the response
 
    async componentDidMount(){
        const response=await fetch('/api/categories');
        const body = await response.json();
        this.setState({Categories : body , isLoading: false});
    }

    render() { 
        const {Categories , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        
        return ( 
            
                <div>
                    <AppNav/>
                    <h2>Categories</h2>
                    {
                        Categories.map( category => 
                            <div id={category.id}>
                                {category.name}
                            </div>
                        )

                    }

                </div>
         );
    }
}
 
export default Category;