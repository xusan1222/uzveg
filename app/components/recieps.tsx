import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedRecipes = () => {
  const recipes = [
    {
      title: "Vegan Plov",
      description: "A plant-based twist on Uzbekistan's famous national dish.",
      difficulty: "Easy",
      time: "30 mins",
    },
    {
      title: "Chickpea Salad",
      description: "A refreshing, protein-packed salad for any occasion.",
      difficulty: "Medium",
      time: "20 mins",
    },
    {
      title: "Stuffed Bell Peppers",
      description: "Colorful bell peppers stuffed with rice and veggies.",
      difficulty: "Hard",
      time: "45 mins",
    },
  ];

  return (
    <section className="py-12 bg-green-100 ">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-green-900">Featured Vegan Recipes</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover some of our top plant-based recipes to get you started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto ">
        {recipes.map((recipe, index) => (
          <Card key={index} className="p-6 relative z-2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{recipe.title}</CardTitle>
              <CardDescription className="mt-2">{recipe.description}</CardDescription>
            </CardHeader>
            <div className="mt-4">
              <Badge variant="outline" className="mr-2">
                {recipe.difficulty}
              </Badge>
              <Badge variant="outline">{recipe.time}</Badge>
            </div>
            <CardFooter className="mt-6">
              <Button className="w-full">View Recipe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;

