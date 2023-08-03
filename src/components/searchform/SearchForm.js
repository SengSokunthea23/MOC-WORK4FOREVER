import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function SearchForm(){
    return(
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 mt-4 container"
        >
            <Tab eventKey="Search" title="Search" className="container">
                1. Select Trade Direction <span>(required)</span>
                2. Select Country <span>(required)</span>
                3. Select Agreement <span>(required)</span>
                <Nav className="justify-content-start text-dark mt-3 border ms-4" activeKey="/home">
                    <Nav.Item className="col col-5">
                        <InputGroup>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Nav.Item>
                    <Nav.Item className="col col-2">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="col col-3">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Button variant="warning" className="px-5">Search</Button>{' '}
                </Nav>
            </Tab>
            <Tab eventKey="Browse categories" title="Browse categories" className="container">
                1. Select to download data by chapter or country <span>(required)</span>
                2. Select chapter or country to download <span>(required)</span>
                3. Select Country <span>(required)</span>
                <Nav className="justify-content-start text-dark mt-3 border ms-4" activeKey="/home">
                    <Nav.Item className="col col-2">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="col col-3">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="col col-5">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Button variant="warning" className="px-5">Browse</Button>{' '}
                </Nav>
            </Tab>
            <Tab eventKey="Download" title="Download" className="container">
            1. Select to download data by chapter or country <span>(required)</span>
            2. Select chapter or country to download <span>(required)</span>
                <Nav className="justify-content-start text-dark mt-3 border ms-4" activeKey="/home">
                    <Nav.Item className="col col-5">
                        <Form.Select aria-label="Default select example">
                            <optiongi>Select</optiongi>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Nav.Item className="col col-5">
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Nav.Item>
                    <Button variant="warning" className="ps-5 pe-5 text-center">Download</Button>{' '}
                </Nav>
            </Tab>
        </Tabs>
    )
}
export default SearchForm;