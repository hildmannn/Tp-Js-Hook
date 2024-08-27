import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes, onDelete }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tus Recestas</h2>
      <div className="text-center mb-3">
        <Link to="/recipes/new" className="btn btn-success">Agregar Nueva Receta</Link>
      </div>
      <ul className="list-group">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/recipes/${recipe.id}`} className="text-decoration-none">
              {recipe.name}
            </Link>
            <button onClick={() => onDelete(recipe.id)} className="btn btn-danger btn-sm">Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
