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

const ContactPage = useLazyComponent('../pages/Contact/Contact');
const PricingPage = useLazyComponent('../pages/Pricing/Pricing');
const LoginPage = useLazyComponent('../pages/Login/Login');
const OrganizationsPage = useLazyComponent(
  '../pages/Organizations/Organizations'
);
const OrganizationDetailPage = useLazyComponent(
  '../pages/OrganizationDetail/OrganizationDetail'
);
const TeamDetail = useLazyComponent('../pages/TeamDetail/TeamDetail.tsx');

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<PublicRouter />}>
        <Route index element={<WelcomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
      <Route path='/organizations' element={<PrivateRouter />}>
        <Route
          index
          element={
            <Layout>
              <OrganizationsPage />
            </Layout>
          }
        />
        <Route
          path=':organizationId'
          element={
            <Layout sidebar={<Sidebar />}>
              <OrganizationDetailPage />
            </Layout>
          }
        />
        <Route
          path=':organizationId/teams/:teamId'
          element={
            <Layout sidebar={<Sidebar />}>
              <TeamDetail />
            </Layout>
          }
        />
      </Route>
    </>
  )
);
