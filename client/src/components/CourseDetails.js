import React, { Component } from 'react';
import {
    Table,
    Container,
    Row,
    Col
} from 'reactstrap';

import { withRouter } from "react-router";

class CourseDetails extends Component {
    state = {
        SemesterNumber : "", 
        course : []
    }

    async componentDidMount () {
        
        const { SemesterNumber } = this.props.match.params
        const { id } = JSON.parse(localStorage.getItem('user'))

        fetch(`http://localhost:5000/api/viewClassStudents/CourseDetails/${SemesterNumber}/${id}`)
        .then(res => res.json())
        .then(
          (course) => {
              
            if (course.error) {
                alert('Error from database')
                console.log(course.error)
                return 
            }


            console.log(course)
            this.setState({ course, SemesterNumber });

          },
          (error) => {
            
            alert('Error fetching data')
            console.log(error)
            
          })
    }


    render () {
        return (
            <Container>
                <Row>
                    <Col xs="12"><h1>Semester Details - { this.state.SemesterNumber } </h1></Col>
                    <Col xs="12" style={{ paddingTop: '2em' }}>
                        <Table>
                            <thead>
                                <tr>
                                
                                    <th>Name</th>
                                    <th>Course ID</th>
                                    <th>CourseDetails</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.course.map((course, i) => (
                                        <tr key={i}>
                                            
                                            <td>{ course.Course && course.Course.Name }</td>
                                            <td>{ course.CourseID }</td>
                                            <td>{ course.CourseDetails }</td>
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default withRouter(CourseDetails);