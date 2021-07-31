import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import CivilData from './civilDataApi'


const Civil = () => {
    const [deptData, setDeptData] = useState(CivilData);

    return (
        <>
            <h3 className="civil-header">Civil Department Faculty Member</h3>
            <div className="table">
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th className="table-id">Sl.no</th>
                            <th id="th-data">Name</th>
                            <th id="th-data">Username</th>
                            <th id="th-data">Subject</th>
                        </tr>
                    </thead>
                </Table>
                {deptData.map((curElem) => {

                    const { id, name, email, subject } = curElem;
                    return (
                        <>
                            <Table striped bordered hover>
                                <tbody key={id}>
                                    <tr>
                                        <td className="table-id">{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{subject}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Civil
