import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RecipeSharingApp = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish." },
  ]);
  const [newRecipe, setNewRecipe] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const addRecipe = () => {
    if (newRecipe.title && newRecipe.description) {
      setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
      setNewRecipe({ title: "", description: "" });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="mb-4">
        <Input name="title" placeholder="Recipe Title" value={newRecipe.title} onChange={handleChange} />
        <Textarea name="description" placeholder="Recipe Description" value={newRecipe.description} onChange={handleChange} className="mt-2" />
        <Button onClick={addRecipe} className="mt-2">Add Recipe</Button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="mb-2 p-4">
            <CardContent>
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p>{recipe.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeSharingApp;
