import React from 'react';
import { ProductEditStyles } from './ProductEdit.styles';

const ProductEdit = ({ 
  isEdit, 
  form,
  updateField,
  handleUpdate,
  handleDelete,
  handleCreate
}) => {
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

      {isEdit 
      ?
        <>
          <button
            type="button"
            className="ProductEdit-Button"
            onClick={handleUpdate}
          >
            Update
          </button>

          <button
            type="button"
            className="ProductEdit-Button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      :
        <button
          type="button"
          className="ProductEdit-Button"
          onClick={handleCreate}
        >
          Create
        </button>
      }
    </form>
  )
}

export default ProductEdit;