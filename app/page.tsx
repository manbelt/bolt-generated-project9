import { Header } from "./components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

const categories = [
  {
    id: "restaurants",
    title: "Restaurants",
    description: "Savor local and international cuisine"
  },
  {
    id: "accommodation",
    title: "Accommodation",
    description: "Find your perfect stay"
  },
  {
    id: "beaches",
    title: "Beaches",
    description: "Explore stunning coastlines"
  },
  {
    id: "nature",
    title: "Nature",
    description: "Discover natural wonders"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Discover the Beauty of Jávea
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your comprehensive guide to Costa Blanca's hidden gem
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Explore Jávea
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
