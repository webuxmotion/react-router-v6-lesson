import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from './ProductsService';

const ProductEditStyles = css`
  color: #fff;
  background: #2a2c37;
  border-radius: 6px;
  padding: 15px;
  .ProductEdit {
    &-Input {
      width: 100%;
      border: 1px solid transparent;
      color: #fff;
      background: #1d1e26;
      padding: 10px 15px;
      margin-bottom: 5px;
      border-radius: 6px;
      outline: 0;
      &:focus {
        border-color: #50fa7b;
      }
    }
    &-Textarea {
      min-height: 80px;
      resize: none;
    }
    &-Button {
      border: 2px solid #50fa7b;
      color: #50fa7b;
      background: none;
      padding: 10px 15px;
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const ProductEdit = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm({
      id: '',
      name: '',
      price: 0,
      description: ''
    });
  }, []);

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

  if (form === null) {
    return <div>Loading...</div>
  }

  return (
    <form className={ProductEditStyles}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        className="ProductEdit-Input"
        onChange={updateField}
        value={form.id}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="ProductEdit-Input"
        onChange={updateField}
        value={form.name}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="ProductEdit-Input"
        onChange={updateField}
        value={form.price}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="ProductEdit-Input ProductEdit-Textarea"
        onChange={updateField}
        value={form.description}
      />
      <button
        type="button"
        className="ProductEdit-Button"
        onClick={handleCreate}
      >
        Create
      </button>
    </form>
  )
}

export default ProductEdit;