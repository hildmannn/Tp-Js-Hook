import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      ingredients: ingredients.split(',').map(ing => ing.trim()),
    };
    onAdd(newRecipe);
    navigate('/recipes');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
            <h2 className="text-center mb-4">Add New Recipe</h2>
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter recipe name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Ingredients (separated by commas)</label>
              <textarea
                className="form-control"
                placeholder="Enter ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">Add Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecipeForm;
