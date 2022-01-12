import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import AdminNavBar from '../../Components/AdminNavbar';
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';
import { BASE_URL } from '../../Helper/constant';
import { Link } from 'react-router-dom';


const ViewAdmin = () => {

    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        getAdmin()
    }, [])

    const getAdmin = () => {

        axios.get(`${BASE_URL}/admin/getAdmin`)
            .then(response => setAdminData(response.data.result))
            .catch((error) => {
                console.error('Error:', error)
            });
    };


    const deleteAdmin = async (_id) => {
        await axios.delete(`${BASE_URL}/admin/delete/${_id}`)
        getAdmin()
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
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {adminData && adminData.map((datas, index) => {
                                const { name, email, contactNumber, _id } = datas;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{contactNumber}</td>
                                        <td>
                                            <Link to={`/admin/update/${_id}`}>
                                                <Button className="btn btn-light">
                                                    <MdModeEditOutline />
                                                </Button>
                                            </Link>
                                            <Button className="btn btn-light"
                                                onClick={() =>
                                                    deleteAdmin(_id)
                                                }
                                            >
                                                <AiFillDelete />
                                            </Button>
                                            <Link to={`/admin/getSingleAdmin/${_id}`}>
                                                <Button className="btn btn-light">
                                                    <GrFormView />
                                                </Button>
                                            </Link>
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

export default ViewAdmin
