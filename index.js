import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="bg-white shadow-md p-4 rounded-lg mb-4">
          <ul className="flex justify-around">
            <li><Link to="/" className="text-blue-500">Home</Link></li>
            <li><Link to="/submit" className="text-blue-500">Submit Recipe</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/recipes")
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.example.com/recipes", { title, description })
      .then(response => alert("Recipe submitted!"))
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Submit a Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
               className="w-full p-2 mb-2 border border-gray-300 rounded" />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default App;
