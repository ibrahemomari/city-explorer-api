import axios from 'axios';
import React, { Component } from 'react'
import { Container,Row,Col,Form,Button, Table} from 'react-bootstrap'

class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            userAreaInput:'',
            location:'',
            latitude:'',
            longitude:'',
            description:'',
            date:'',
            error:'',
            show:false
        }
    }

    getLocationInput=(e)=>
    {
        console.log(e.target.value);
        this.setState({
            userAreaInput:e.target.value
        })
    }


    getData= async (e)=>
    {   try{

   
        e.preventDefault();
        let axiosResData= await axios.get(`http://localhost:8000/weather/${this.state.userAreaInput}`);
        console.log(axiosResData);
       console.log(axiosResData.data.data[0].datetime);
        this.setState({
            show:true,
            location:axiosResData.data.city_name,
            latitude:axiosResData.data.lat,
            longitude:axiosResData.data.lon,
            description:axiosResData.data.data[0].weather.description,
            date:axiosResData.data.data[0].datetime,
            error:""
            
        })

        if(axiosResData.data=="not found this location")
        {
            this.setState({
                show:false,
                error:"Invalid value,please try agin"
    
            })
        }
    }
    catch{
        this.setState({
            show:false,
            error:"Invalid value,please try agin"

        })
    }
        
       
       
    }

    render() {
        return (
            <section>
                <Container>
                <Row>
                        <Form onSubmit={this.getData}>
                            <Form.Group>
                                <Form.Label>Location (Amman , Paris , Seattle ) :</Form.Label>
                                <Form.Control type="text" placeholder="Amman..."  onChange={(e)=>{this.getLocationInput(e)}}/>
                                <Form.Label className="error-message">{this.state.error}</Form.Label>
                            </Form.Group>
                            <Button type="submit" variant="info">Explore</Button>
                        </Form>
                </Row>
                <Row>
                    {
                        this.state.show &&
                        <>
                        <Col><p>City name: {this.state.location}</p></Col>
                        <Col><p>Latitude: {this.state.latitude}</p></Col>
                        <Col><p>Longitude: {this.state.longitude}</p></Col>
                        </>
                    }
                </Row>
                <Row>
                    {
                         this.state.show &&
                         <>
                         <Col><p>description: {this.state.description}</p></Col>
                         <Col><p>Date: {this.state.date}</p></Col>
                         </>
                    }
                </Row>
                </Container>
            </section>
        )
    }
}

export default Weather
