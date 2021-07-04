import React, { Component } from 'react';

class Category extends Component {
    state = { 
        isLoading : true,
        Categories : []
     }

     //there are two ways to send a request in Js 
     // Sync - you send the request and then wait for the response
     // Async - you send the request and we dont have to wait until the response is ready 

     async componentDidMount(){

        const response = await fetch('/api/categories')
        const body = await response.json();
        this.setState({Categories : body , isLoading :false});

     }


    render() { 
        const {Categories , isLoading} = this.state;
        if(isLoading)
            return (<div>Loading. . .</div>);
        //iterating through each category and priting the names and the id of each id 
        return (
            <div>
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
