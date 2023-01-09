import { setTitle, setNotificationCounter, settingsWebsiteFormHandler } from '../../features/State';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { clearNullProperties, formStateSuiter } from '../../helpers/misc.helpers';
import { IFormData } from '../../models/FormData';

export const WebsiteSettingPage = () => {
    const state = useSelector((state: any) => state.data.value)
    const form = state.pages.settings.website.form;
    const dispatch = useDispatch();

    const submitHandler = (data: Object) => {
        const dataToBeSent: IFormData = formStateSuiter(data, true)
        dispatch(settingsWebsiteFormHandler(dataToBeSent))
    }


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
                onSubmit={(evt) => {
                    evt.preventDefault();
                    const json = clearNullProperties(form)
                    submitHandler(json)
                }}
            >

                <div className='div-line'>
                    <TextField id="outlined-basic" label="Website Name" variant="outlined" name="name" required value={form.name} onChange={(evt) => {
                        dispatch(settingsWebsiteFormHandler({ key: evt.target.name, value: evt.target.value }))
                    }} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" name="description" value={form.description} onChange={(evt) => {
                        dispatch(settingsWebsiteFormHandler({ key: evt.target.name, value: evt.target.value }))
                    }} />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Url" variant="outlined" name="url" required value={form.url} onChange={(evt) => {
                        dispatch(settingsWebsiteFormHandler({ key: evt.target.name, value: evt.target.value }))
                    }} />
                    <TextField id="outlined-basic" label="websiteType" variant="outlined" name="websiteType" />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Client Id" variant="outlined" name="clientId" value={form.clientId} onChange={(evt) => {
                        dispatch(settingsWebsiteFormHandler({ key: evt.target.name, value: evt.target.value }))
                    }} />
                    <TextField id="outlined-basic" label="Client Secret" variant="outlined" name="clientSecret" value={form.clientSecret} onChange={(evt) => {
                        dispatch(settingsWebsiteFormHandler({ key: evt.target.name, value: evt.target.value }))
                    }} />
                </div>
                <div className='div-line flex-right'>
                    <Button variant="contained" type="submit">Save</Button>
                </div>


            </Box>
        </div >
    )
}