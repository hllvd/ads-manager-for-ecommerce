import { setTitle, setNotificationCounter } from '../../features/ui/ui-slice';
import { setForm } from '../../features/forms/website-slices';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { clearNullProperties, formStateSuiter } from '../../helpers/misc.helpers';
import { IFormData } from '../../models/FormData';

import { useFetchProductsQuery } from '../../features/api/products-slice';


export const WebsiteSettingPage = () => {
    let state = useAppSelector(state => state.forms.website)
    //let products = useFetchProductsQuery();
    //type productsType = typeof products;
    type stateType = typeof state;
    const dispatch = useAppDispatch();

    //const { data = [], isFetching } = useFetchWebsiteQuery();
    const { data = [], isFetching } = useFetchProductsQuery();
    console.log("data", data);
    const saveStateHandler = (obj: Partial<stateType>) => {
        let objResult = { ...state, ...obj }
        dispatch(setForm(objResult))
    }
    const submitHandler = (data: Object, formEl: Object) => {
        const dataToBeSent: IFormData = formStateSuiter(data, { submit: true, formEl })
        console.log(data)
        //dispatch(settingsWebsiteFormHandler(dataToBeSent))
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
                action="http://localhost:3000/business/0/website"
                onSubmit={(evt) => {
                    evt.preventDefault();
                    const formEl = evt.target
                    const json = clearNullProperties(state)
                    submitHandler(json, formEl)
                }}
            >
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Website Name" variant="outlined" name="name" value={state.name} required onChange={(evt) => {
                        saveStateHandler({ name: evt.target.value })
                    }} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" name="description" value={state.description} onChange={(evt) => {
                        saveStateHandler({ description: evt.target.value })
                    }} />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Url" variant="outlined" name="url" required value={state.url} onChange={(evt) => {
                        saveStateHandler({ url: evt.target.value })
                    }} />
                    <TextField id="outlined-basic" label="websiteType" variant="outlined" name="websiteType" />
                </div>
                <div className='div-line'>
                    <TextField id="outlined-basic" label="Client Id" variant="outlined" name="clientId" value={state.clientId} onChange={(evt) => {
                        saveStateHandler({ clientId: evt.target.value })
                    }} />
                    <TextField id="outlined-basic" label="Client Secret" variant="outlined" name="clientSecret" value={state.clientSecret} onChange={(evt) => {
                        saveStateHandler({ clientSecret: evt.target.value })
                    }} />
                </div>
                <div className='div-line flex-right'>
                    <Button variant="contained" type="submit">Save</Button>
                </div>
            </Box>
        </div >
    )
}