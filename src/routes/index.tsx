import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import React from 'react';
import { WelcomePage } from '../pages';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import { Layout } from '../components';
import { useLazyComponent } from '../hooks/useLazyComponent';
import Sidebar from '../components/Sidebar/Sidebar';

const ContactPage = React.lazy(() => import('../pages/Contact/Contact'));
const PricingPage = React.lazy(() => import('../pages/Pricing/Pricing'));
const LoginPage = React.lazy(() => import('../pages/Login/Login'));
const OrganizationsPage = React.lazy(
  () => import('../pages/Organizations/Organizations')
);
const OrganizationDetailPage = React.lazy(
  () => import('../pages/OrganizationDetail/OrganizationDetail')
);
const TeamDetail = React.lazy(() => import('../pages/TeamDetail/TeamDetail'));

const SuspendComponent = ({ component }: any) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>{component}</React.Suspense>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<PublicRouter />}>
        <Route index element={<WelcomePage />} />
        <Route
          path='contact'
          element={<SuspendComponent component={<ContactPage />} />}
        />
        <Route
          path='pricing'
          element={<SuspendComponent component={<PricingPage />} />}
        />
        <Route
          path='login'
          element={<SuspendComponent component={<LoginPage />} />}
        />
      </Route>
      <Route path='/organizations' element={<PrivateRouter />}>
        <Route
          index
          element={
            <Layout>
              <SuspendComponent component={<OrganizationsPage />} />
            </Layout>
          }
        />
        <Route
          path=':organizationId'
          element={
            <Layout sidebar={<Sidebar />}>
              <SuspendComponent component={<OrganizationDetailPage />} />
            </Layout>
          }
        />
        <Route
          path=':organizationId/teams/:teamId'
          element={
            <Layout sidebar={<Sidebar />}>
              <SuspendComponent component={<TeamDetail />} />
            </Layout>
          }
        />
      </Route>
    </>
  )
);
