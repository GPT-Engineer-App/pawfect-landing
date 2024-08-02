import { PawPrint } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-blue-800">Paw-some Facts</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#anatomy" className="text-blue-600 hover:text-blue-800">Anatomy</a></li>
              <li><a href="#importance" className="text-blue-600 hover:text-blue-800">Importance</a></li>
              <li><a href="#fun-facts" className="text-blue-600 hover:text-blue-800">Fun Facts</a></li>
              <li><a href="/documents" className="text-blue-600 hover:text-blue-800">Documents</a></li>
              <li><a href="/items" className="text-blue-600 hover:text-blue-800">Items</a></li>
              <li><a href="/login" className="text-blue-600 hover:text-blue-800">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Discover the Wonder of Dog Paws</h2>
          <p className="text-xl text-gray-700">Uncover the fascinating world beneath your furry friend's feet!</p>
        </section>

        <section id="anatomy" className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Anatomy of a Dog's Paw</h3>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/placeholder.svg" alt="Dog paw anatomy" className="mx-auto object-cover w-full md:w-1/2 h-[300px] rounded-lg shadow-md" />
            <ul className="list-disc list-inside mt-4 md:mt-0 md:ml-8 text-gray-700">
              <li>Digital pads: Provide cushioning and traction</li>
              <li>Metacarpal pad: Acts as a shock absorber</li>
              <li>Dewclaws: Vestigial digits, often removed</li>
              <li>Nails: Help with grip and digging</li>
            </ul>
          </div>
        </section>

        <section id="importance" className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">The Importance of Paws</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Sensory Organ</h4>
              <p className="text-gray-700">Dog paws contain numerous nerve endings, making them sensitive to touch, temperature, and pressure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Temperature Regulation</h4>
              <p className="text-gray-700">Paws help dogs regulate their body temperature through sweat glands in their paw pads.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Mobility and Balance</h4>
              <p className="text-gray-700">Paws provide traction and support, allowing dogs to run, jump, and maintain balance on various surfaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Protection</h4>
              <p className="text-gray-700">The tough paw pads protect dogs' feet from rough terrain and extreme temperatures.</p>
            </div>
          </div>
        </section>

        <section id="fun-facts" className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Fun Paw Facts</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-gray-700">
              <li>Dogs sweat through their paw pads</li>
              <li>Some dogs have webbed feet for swimming</li>
              <li>A dog's paw print is as unique as a human fingerprint</li>
              <li>Dogs have a dominant paw, just like humans are right or left-handed</li>
              <li>The smell of corn chips from a dog's paws is caused by naturally occurring bacteria</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Paw-some Facts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
