import React from "react";
import { Card } from "@/components/ui/card"; // Adjust the import path based on your project structure

const reasons = [
  {
    title: "Health Benefits",
    description: "A plant-based diet can reduce the risk of chronic diseases, improve heart health, and increase energy levels. Many find that they feel more vibrant and energetic on a vegan diet.",
    icon: "🍏",
  },
  {
    title: "Environmental Impact",
    description: "Choosing vegan helps reduce your carbon footprint, save water, and lessen the environmental impact associated with animal agriculture. It's a significant step towards a more sustainable future.",
    icon: "🌍",
  },
  {
    title: "Ethical Considerations",
    description: "Veganism supports animal rights by reducing harm and exploitation. It aligns with the belief in treating animals with respect and compassion.",
    icon: "❤️",
  },
];

const WhyBeVegan = () => {
  return (
    <section className="py-12 bg-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">Why Be Vegan?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover the reasons why adopting a vegan lifestyle can be beneficial for you, the planet, and animals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg rounded-lg relative z-2">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-green-800">{reason.title}</h3>
              <p className="text-gray-700 mt-2">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBeVegan;
