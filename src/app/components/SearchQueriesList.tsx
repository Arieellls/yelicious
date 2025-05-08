import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SearchQueriesList() {
  const categories: Record<string, string[]> = {
    "Vegetables": [
      "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", 
      "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", 
      "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", 
      "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", 
      "chili", "garlic", "green bean"
    ],
    "Herbs & Spices": [
      "basil", "coriander", "parsley", "dill", "rosemary", "oregano", 
      "cinnamon", "saffron"
    ],
    "Legumes": [
      "bean", "chickpea", "lentil"
    ],
    "Fruits": [
      "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", 
      "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", 
      "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", 
      "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", 
      "peach", "pear", "pineapple", "plum", "pomegranate", "quince", 
      "raspberry", "strawberry", "watermelon"
    ],
    "Dishes & Prepared Foods": [
      "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", 
      "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", 
      "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", 
      "toast", "marzipan", "fajitas", "champ", "lasagna", "poke", "chocolate", 
      "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", 
      "sushi", "ice cream", "curry"
    ],
    "Meat & Protein": [
      "chicken", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", 
      "bacon", "ham", "pepperoni", "salami", "ribs", "tofu"
    ],
    "Condiments & Sauces": [
      "ketchup", "hummus", "chili", "maple syrup", "parma ham"
    ]
  };

  const filteredCategories = categories;

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl p-4">
      <h1 className="text-lg uppercase font-semibold sm:text-xl">Available search queries</h1>
      <Accordion type="multiple" className="w-full">
        {Object.keys(filteredCategories).map((category) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="cursor-pointer text-lg font-medium hover:no-underline">
              {category} ({filteredCategories[category].length})
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {filteredCategories[category].map((item) => (
                  <div
                    key={item}
                    className="rounded-md bg-gray-100 p-2 hover:bg-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}