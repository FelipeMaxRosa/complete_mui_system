import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useForm from '../../components/useForm';

const useStyles = makeStyles((theme) => ({
	root: {
    "& .MuiFormControl-root": {
      width: '80%',
      margin: theme.spacing(1),

    },
	},
}));

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
}

export default function EmployeeForm() {
  
  const classes = useStyles();

  const { values, setValues, handleInputChange} = useForm(initialFValues);


  return (
			<form className={classes.root}>
				<Grid container>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							label="Full Name"
							name="fullName"
							value={values.fullName}
							onChange={handleInputChange}
						/>
						<TextField
							variant="outlined"
							label="Email"
							name="email"
							value={values.email}
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</form>
		);
}
