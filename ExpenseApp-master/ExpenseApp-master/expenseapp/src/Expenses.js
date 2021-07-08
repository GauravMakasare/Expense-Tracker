import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import {Container, Input, Button, Label, Form, FormGroup, Table, } from 'reactstrap';
import Moment from 'react-moment';
class Expenses extends Component {
     
    emptyItem = {
        id :'103',
        expensedate: new Date(),
        description:'',
        location:'',
        category:[1, 'Travel']
    }

    constructor(props) {
        super(props)

        this.state = { 
            date: new Date(),
            isLoading : false,
            Categories : [],
            Expenses :[],
            item : this.emptyItem
    
         }
    }
    
    async remove(id) {
        await fetch(`/api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json', 
                'Content-Type' : 'application/json'
            }
        }).then ( () => {
            let updatedExpenses=[...this.state.Expenses].filter(i => i.id !==id);
            this.setState({Expenses : updatedExpenses}); 
        });
    }

    
     async componentDidMount(){


         const response = await fetch('/api/categories');
         const body = await response.json();
         this.setState({Categories: body, isLoading: false});


         const responseExp = await fetch('/api/expenses');
         const bodyExp = await responseExp.json();
         this.setState({Expenses : bodyExp, isLoading: false});
     }

    render() { 
        const title = <h3>Add Your Expenses</h3>;
        const {Categories} = this.state;
        const {Expenses , isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>)
            
            let optionList = 
                Categories.map(category =>
                    <option id={category.id}>
                        {category.name}
                    </option>
                    )
            

            let rows = 
                    Expenses.map(expense =>
                        
                        <tr>
                            <td>{expense.description}</td>
                            <td>{expense.location}</td>
                            <td>{expense.expensedate}</td>
                            <td>{expense.category.name}</td>
                            <td><Button size="sm" color="danger" onClick={ () => this.remove(expense.id) }>Delete</Button></td>
                        </tr>
                        
                        )



        return ( 
                <div>
                    <AppNav/>
                    <Container>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="Title">Title</Label>
                                <Input type="text" name="Title" 
                                    id="Title" onChange={this.handleChange} autocomplete="name"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="category">Category</Label>
                               
                                <select>
                                    {optionList}
                                </select>

                                <Input type="text" name="category" 
                                    id="category" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="city">Date</Label>
                                <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                            </FormGroup>

                            <div className="row">
                            
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location"/>
                            </FormGroup>
                            
                            </div>
                            
                            <FormGroup>
                               <Button color="primary" type="submit">Save</Button>{' '}
                               <Button color="secondary" tag={Link} to="/">Cancel</Button>
                            </FormGroup>

                        </Form>
                    </Container>

                    {''}

                    <Container>
                        <h4>Expense List</h4>
                        <Table className="mt-4">
                            <thead>
                                <tr>
                                   <th width="30%">Description</th>
                                   <th width="10%">Location</th>
                                   <th>Date</th>
                                   <th>Category</th>
                                   
                                   <th width="10%">Actions</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {rows}

                            </tbody>



                        </Table>
                    </Container>




                </div> );
    }
}
 
export default Expenses;