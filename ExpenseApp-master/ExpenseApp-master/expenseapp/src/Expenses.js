import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import {Container, Input, Button, Label, Form, FormGroup } from 'reactstrap';

class Expenses extends Component {
    state = {  }
    handleChange
    render() { 
        return ( <div>
                    <AppNav/>
                    <Container>
                        <form>
                            
                            <FormGroup>
                                <label for="Title">Title</label>
                                <input type="text" name="Title" id="Title" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label for="category">Category</label>
                                <input type="text" name="category" id="category" onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label for="expenseData">Date</label>
                                <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                            </FormGroup>

                            <FormGroup>
                                <label for="location">Location</label>
                                <input type="text" name="location" id="location" onChange={this.handleChange}></input>
                            </FormGroup>

                            <FormGroup>
                               <Button color="primary" type="submit">Save</Button>{' '}
                               <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                            </FormGroup>

                        </form>
                    </Container>
                </div> );
    }
}
 
export default Expenses;