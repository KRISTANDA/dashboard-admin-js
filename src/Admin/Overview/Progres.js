import React from 'react';
import Sidebar from '../../Components/Sidebar';
import { Link } from 'react-router-dom';
import { Button, InputGroupm, Container, Form, Col, Row, Card, Table, InputGroup } from "react-bootstrap";
import Footer from '../../Components/Footer';

function Progres(props) {
    return (
        <div className="container-fluid vh-100">
        <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div>
                        <h4 className="fw-bold">Progres</h4>
                    </div>
                    <div className='d-flex align-items-center'>
                        <InputGroup>
                            <Form.Control
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-addon2"
                            className='addon2'
                            />
                            <InputGroup.Text id="basic-addon2"><i class='bx bxs-chevron-down'></i></InputGroup.Text>
                        </InputGroup>
                        
                        <Button variant='light' className='ms-4 shadow-sm btn-pro me-3'>
                            Filters <i class='bx bx-sort'></i>
                        </Button>

                        <Button variant='light' className=' shadow-sm'>
                            <i class='bx bx-menu'></i>
                        </Button>
                        <Button variant='light' className=' shadow-sm'>
                            <i class='bx bxs-grid-alt'></i>
                        </Button>

                    </div>
                </div>
                
                <Row>
                    <Col md={12}>
                    <Table bordered hover className='text-center'>
                        <thead>
                            <tr>
                            <th>Tasks</th>
                            <th>Category</th>
                            <th>Assigned To</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UI/UX Design</td>
                                <td>Design</td>
                                <td>Hizkia </td>
                                <td>
                                    <Button variant='outline-danger' className='rounded-pill'>
                                        Error
                                    </Button>
                                </td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>UI/UX Design</td>
                                <td>Design</td>
                                <td>Hizkia </td>
                                <td>
                                    <Button variant='outline-primary' className='rounded-pill'>
                                        Ongoing
                                    </Button>
                                </td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>UI/UX Design</td>
                                <td>Design</td>
                                <td>Hizkia </td>
                                <td>
                                    <Button variant='outline-warning' className='rounded-pill'>
                                        Paused
                                    </Button>
                                </td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                            <tr>
                                <td>UI/UX Design</td>
                                <td>Design</td>
                                <td>Hizkia </td>
                                <td>
                                    <Button variant='outline-success' className='rounded-pill'>
                                        Done
                                    </Button>
                                </td>
                                <td><i class='bx bx-dots-vertical-rounded'></i></td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>


                <Footer />


            </main>
        </div>
    </div>
    );
}

export default Progres;