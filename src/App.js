import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  // carga recipes del localStorage en el initial render
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // guarda recipes en localStorage cuando recipes cambia
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleLogin = (username) => {
    setUser(username);
    sessionStorage.setItem('user', username);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/recipes" element={user ? <RecipeList recipes={recipes} onDelete={deleteRecipe} /> : <Navigate to="/login" />} />
          <Route path="/recipes/new" element={user ? <RecipeForm onAdd={addRecipe} /> : <Navigate to="/login" />} />
          <Route path="/recipes/:id" element={user ? <RecipeDetail recipes={recipes} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
