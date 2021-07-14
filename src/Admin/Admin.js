import { css } from '@emotion/css';
import React, { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loadable from '../Common/Loadable';

const ProductEdit = Loadable(lazy(() => import('../Products/ProductEdit/ProductEdit.container')));
const ProductsIndex = Loadable(lazy(() => import('../Products/ProductsIndex')));

const AdminStyles = css`
  .Admin {
    &-Header {
      display: flex;
      align-items: center;
    }
    &-Link {
      text-decoration: none;
      border: 2px solid #fff;
      color: #fff;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
      text-transform: uppercase;
      margin-left: auto;
    }
  }
`;

const Admin = () => <div className={AdminStyles}>
  <div className="Admin-Header">
    <h1>Admin</h1>
    <Link to="new" className="Admin-Link">New</Link>
  </div>
  
  <Routes>
    <Route path="/" element={<ProductsIndex />} />
    <Route path="/new" element={<ProductEdit isEdit={false} />} />
    <Route path="/:id" element={<ProductEdit isEdit={true} />} />
  </Routes>
</div>

export default Admin;