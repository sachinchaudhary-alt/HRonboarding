import { Routes, Route, Navigate } from 'react-router-dom';

import HRLayout from '../layouts/HRLayout.jsx';
import RoleRoute from '../components/routing/RoleRoute.jsx';

import LoginPage from '../pages/LoginPage.jsx';

import HRDashboard from '../pages/hr/HRDashboard.jsx';
import HRCandidatesPage from '../pages/hr/HRCandidatesPage.jsx';
import HRCandidateDetailPage from '../pages/hr/HRCandidateDetailPage.jsx';
import HREmployeesPage from '../pages/hr/HREmployeesPage.jsx';
import HRActivityPage from '../pages/hr/HRActivityPage.jsx';

import SettingsPage from '../pages/shared/SettingsPage.jsx';
import ProfilePage from '../pages/shared/ProfilePage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<Navigate to="/" replace />} />

      {/* HR */}
      <Route
        element={
          <RoleRoute allow="hr">
            <HRLayout />
          </RoleRoute>
        }
      >
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/hr/candidates" element={<HRCandidatesPage />} />
        <Route path="/hr/candidates/:candidateId" element={<HRCandidateDetailPage />} />
        {/* Offers are folded into the Candidates area now. */}
        <Route path="/hr/offers" element={<Navigate to="/hr/candidates" replace />} />
        <Route path="/hr/employees" element={<HREmployeesPage />} />
        <Route path="/hr/activity" element={<HRActivityPage />} />
        <Route path="/hr/settings" element={<SettingsPage />} />
        <Route path="/hr/profile" element={<ProfilePage role="hr" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
