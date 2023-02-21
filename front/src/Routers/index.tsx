import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../Pages/Dashboard';
import { WebsiteSettingPage } from '../Pages/WebsiteSettingPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/settings/website" element={<WebsiteSettingPage />} />
        </Routes>
    )
}