import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard';
import { WebsiteSettingPage } from '../pages/WebsiteSettingPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/settings/website" element={<WebsiteSettingPage />} />
        </Routes>
    )
}