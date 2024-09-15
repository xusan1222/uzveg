"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jamila T.",
    text: "Since switching to veganism, I’ve felt lighter, healthier, and more connected to the planet. The recipes here have made the journey much easier!",
  },
  {
    name: "Ahmed B.",
    text: "Being vegan has improved my energy levels and helped me make more mindful lifestyle choices. This site was my go-to resource!",
  },
  {
    name: "Nargiza K.",
    text: "I’m saving money and discovering incredible new foods that I never knew existed, thanks to the amazing vegan tips here!",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">Our staff</h2>
        <p className="text-lg text-gray-600 mt-4">Hear from our happy customers and community members.</p>

        <div className="relative mt-8 bg-white py-8 px-26 rounded-lg shadow-lg max-w-xl mx-auto overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <p className="text-lg italic text-gray-800 mb-6">&quot;{testimonial.text}&quot;</p>
                  <p className="text-green-900 font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-32 px-4">
            <Button onClick={handlePrevious} variant="outline">
              <ChevronLeft className="mr-2" /> 
            </Button>
            <Button onClick={handleNext} variant="outline">
               <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
