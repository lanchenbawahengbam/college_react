import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import AdminNavBar from '../../Components/AdminNavbar';
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';
import { BASE_URL } from '../../Helper/constant';
import { Link } from 'react-router-dom';


const ViewFaculty = () => {


    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        getFaculty()
    }, [])

    const getFaculty = () => {

        axios.get(`${BASE_URL}/faculty/getFaculty`)
            .then(response => setFacultyData(response.data.result))
            .catch((error) => {
                console.error('Error:', error)
            });
    };


    const deleteAdmin = async (_id) => {
        await axios.delete(`${BASE_URL}/admin/delete/${_id}`)
        getFaculty()
    }



    return (
        <>
            <AdminNavBar />

            <Container style={{ marginTop: "30px" }}>
                <Row>
                    <Col xs={2} />
                    <Col xs={8}></Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr style={{ fontWeight: '600', fontSize: "20px" }}>
                                <th>Sl no.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {facultyData && facultyData.map((d, index) => {
                                const { name, email, designation, facultyMobileNumber, gender, _id } = d;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{facultyMobileNumber}</td>
                                        <td>{designation}</td>
                                        <td>{gender}</td>
                                        <td>
                                            <Button className="btn btn-light"
                                                onClick={() =>
                                                    deleteAdmin(_id)
                                                }
                                            >
                                                <AiFillDelete />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default ViewFaculty
