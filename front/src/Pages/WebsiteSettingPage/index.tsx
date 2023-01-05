import { setTitle } from '../../features/Ui';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export const WebsiteSettingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitle("Website settings"))
    }, [])

    return (
        <h1>lsdkfjlskdjflksdjflksjdlkfjsdk</h1>
    )
}