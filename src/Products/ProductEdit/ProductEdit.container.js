import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  createProduct, 
  retrieveProduct, 
  updateProduct,
  deleteProduct 
} from '../ProductsService';

import ProductEdit from './ProductEdit';

const ProductEditContainer = ({ isEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!isEdit) {
      setForm({
        id: '',
        name: '',
        price: 0,
        description: ''
      });

      return;
    }

    (async () => {
      try {
        const product = await retrieveProduct(id);
        setForm(product);
      } catch (e) {
        console.warn(e);
        navigate(`/admin`, { replace: true });
      }
    })();
  }, [id]);

  const updateField = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleCreate = async () => {
    try {
      const { id } = await createProduct(form);
      navigate(`/admin/${id}`);
    } catch (e) {
      console.warn(e);
    }
  }
  
  const handleUpdate = async () => {
    try {
      await updateProduct(form);
      alert(`Updated ${form.name}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  }

  const handleDelete = async () => {
    if (!window.confirm(`Really delete ${form.name}?`)) {
      return;
    }

    try {
      await deleteProduct(form.id);
      alert(`Deleted ${form.name}`);
      navigate(`/admin`);
    } catch (e) {
      console.warn(e);
    }
  }

  return <ProductEdit
    isEdit={isEdit}
    form={form}
    updateField={updateField}
    handleUpdate={handleUpdate}
    handleDelete={handleDelete}
    handleCreate={handleCreate}
  />
}

export default ProductEditContainer;