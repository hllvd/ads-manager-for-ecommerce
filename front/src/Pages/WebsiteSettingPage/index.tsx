import { setTitle, setNotificationCounter } from '../../features/Ui.state';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '@mui/material/Button';

export const WebsiteSettingPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Website settings"))
        dispatch(setNotificationCounter(4))
    }, [dispatch])

    return (

        <div>
            <h1>Add new website</h1>
            <Box
                component="form"
                sx={{ m: 1, width: '100%' }}
                noValidate
                autoComplete="off"
            >
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Website Name" variant="outlined" name="name" required />
                    <TextField id="outlined-basic" label="Description" variant="outlined" name="description" />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Url" variant="outlined" name="url" required />
                    <TextField id="outlined-basic" label="websiteType" variant="outlined" name="websiteType" />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Client Id" variant="outlined" name="clientId" />
                    <TextField id="outlined-basic" label="Client Secret" variant="outlined" name="clientSecret" />
                </div>
                <div className='div-line flex-right'>
                    <Button variant="contained">Save</Button>
                </div>
            </Box>
        </div>
    )
}