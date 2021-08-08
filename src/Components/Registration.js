import { Button, Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../Helper/constant';

const Registration = () => {

    const [state, setState] = React.useState({
        name: "",
        dob: new Date().getDate(),
        department: "0",
        password: "",
        email: "",
        contactNumber: ""
    })

    const [department_list, setDepartmentList] = React.useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/department/`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setDepartmentList(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    const handleSubmit = () => {

        fetch(`${BASE_URL}/admin/register`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("SUCCESS")
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("FAIL")
            });

    }


    const handleChange = (event) => {

        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        })

    }


    return (

        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}>


            {/* NAME */}
            <Grid item>
                <Typography>Enter Name</Typography>
                <TextField
                    name="name"
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={state.name}
                    fullWidth
                    size="small" />
            </Grid>


            {/* NAME */}
            <Grid item>
                <Typography>Enter DOB</Typography>
                <TextField
                    name="dob"
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={state.dob}
                    type="date"
                    fullWidth
                    size="small" />
            </Grid>

            {/* NAME */}
            <Grid item>
                <Typography>Enter Department</Typography>
                <Select
                    value={state.department}
                    variant="outlined"
                    name="department"
                    onChange={handleChange}
                >
                    <MenuItem disabled value="0">
                        Select Department
                    </MenuItem>
                    {department_list && department_list.map((item, idx) => (

                        <MenuItem key={idx} value={item.value}>
                            {item.name}
                        </MenuItem>


                    ))}
                </Select>
            </Grid>

            {/* NAME */}
            <Grid item>
                <Typography>Enter Password</Typography>
                <TextField
                    name="password"
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={state.password}
                    fullWidth
                    size="small" />
            </Grid>

            {/* NAME */}
            <Grid item>
                <Typography>Enter Email</Typography>
                <TextField
                    name="email"
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={state.email}
                    fullWidth
                    size="small" />
            </Grid>

            {/* NAME */}
            <Grid item>
                <Typography>Enter Contact Number</Typography>
                <TextField
                    name="contactNumber"
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                    value={state.contactNumber}
                    fullWidth
                    size="small" />
            </Grid>


            <Grid item>
                <Button
                    onClick={() => handleSubmit()}
                    variant="outlined"
                    color="primary">
                    Create Account
                </Button>
            </Grid>
        </Grid>



    );
}

export default Registration;