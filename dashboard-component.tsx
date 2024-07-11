import React from 'react';
import { Search, ShoppingCart, User, ChevronRight, Heart, Download, Gift, TrendingUp, Award, Store } from 'lucide-react';

const ShopYourWayHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop Your Way</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Coupons</a>
            <a href="#" className="hover:underline">Earn</a>
            <a href="#" className="hover:underline">Redeem</a>
            <a href="#" className="hover:underline">Shop Your Way Mastercard®</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline flex items-center">
              <Store size={18} className="mr-1" />
              Sell
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="py-1 px-2 rounded text-black" />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <User className="cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Earn Rewards Banner */}
        <section className="bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Earn Rewards with Shop Your Way</h2>
          <p className="mb-4">Always start your shopping with Shop Your Way and maximize your rewards</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
              <TrendingUp size={18} className="mr-2" />
              Learn about redeeming
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded border border-blue-600 flex items-center">
              <Gift size={18} className="mr-2" />
              Gift Mode
            </button>
          </div>
        </section>

        {/* Featured Shops - Renamed to Shop Spotlight and moved under Earn Rewards */}
        <section className="mb-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Shop Spotlight</h2>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((shop) => (
              <div key={shop} className="flex-shrink-0 w-64 border rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <h3 className="font-bold text-lg">Shop Name</h3>
                    <p className="text-xs text-gray-600">Owner's Name</p>
                  </div>
                </div>
                <p className="text-xs mb-3">Success story: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="bg-gray-200 h-32 mb-2 rounded"></div>
                <button className="w-full bg-blue-600 text-white px-3 py-1 rounded mt-2 text-sm">Visit Shop</button>
              </div>
            ))}
          </div>
        </section>

        {/* Everyday Offers */}
        <section className="mb-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Everyday Offers</h2>
          <div className="flex space-x-4">
            {['Sam\'s Club', 'Walmart', 'Uber', 'Best Buy'].map((brand, index) => (
              <div key={brand} className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <h3 className="font-bold">{brand}</h3>
                <p className="text-sm text-blue-600">{(index + 1) * 5} points per $1</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-80 rounded-lg"></div>
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-gray-200 rounded-lg"></div>
              <div className="bg-gray-200 rounded-lg"></div>
            </div>
          </div>
          <button className="mt-4 text-blue-600 font-semibold">See more categories</button>
        </section>

        {/* Shop Your Way Picks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shop Your Way Picks</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product) => (
              <div key={product} className="border rounded-lg p-2">
                <div className="bg-gray-200 h-24 mb-2 rounded"></div>
                <h3 className="font-bold text-sm">Product Name</h3>
                <p className="text-xs text-gray-600">Seller Name</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-bold text-sm">$XX.XX</p>
                  <p className="text-xs text-blue-600">100 pts</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 font-semibold">See more</button>
        </section>

        {/* Mastercard Banner */}
        <section className="mb-8 bg-gray-100 rounded-lg p-8 flex items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Shop Your Way Mastercard®</h2>
            <p className="mb-4">You are earning more points in more places with your Shop Your Way Mastercard®</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="flex-1">
            <img src="/api/placeholder/400/250" alt="Shop Your Way Mastercard" className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Handpicked Collections - Modified to match the new layout */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Handpicked Collections</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <img src="/api/placeholder/1200/400" alt="Handpicked Collections" className="w-full h-auto rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 rounded-lg">
                <h3 className="text-white text-3xl font-bold mb-2">Handmade, handpicked, and designed for you</h3>
                <p className="text-white mb-4">Shop these unique finds →</p>
                <div className="flex space-x-2 overflow-x-auto">
                  {[1, 2, 3, 4, 5, 6].map((product) => (
                    <div key={product} className="w-24 h-24 bg-gray-300 rounded-md flex-shrink-0"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Fall in love with original finds from standout small shops around the world.</p>
        </section>

        {/* Partner Deal Ads */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Travel Deals', 'Tech Gadgets', 'Fashion Finds'].map((offer) => (
              <div key={offer} className="border rounded-lg p-4 bg-gradient-to-r from-blue-100 to-purple-100">
                <h3 className="font-bold text-lg mb-2">{offer}</h3>
                <p className="text-sm mb-2">Exclusive discounts from our partners</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">View Offers</button>
              </div>
            ))}
          </div>
        </section>

        {/* Sell on Shop Your Way */}
        <section className="bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Sell on Shop Your Way</h2>
          <p className="mb-4">Turn your passion into a business. Start selling today!</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <Award size={18} className="mr-2" />
            Get Started
          </button>
        </section>

        {/* Mobile App Promotion */}
        <section className="bg-blue-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Shop on the Go</h2>
          <p className="mb-4">Download our mobile app for a seamless shopping experience.</p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded flex items-center">
              <Download size={18} className="mr-2" />
              App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded flex items-center">
              <Download size={18} className="mr-2" />
              Google Play
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Gift Cards</a></li>
                <li><a href="#" className="hover:underline">Shop Your Way Registry</a></li>
                <li><a href="#" className="hover:underline">Sitemap</a></li>
                <li><a href="#" className="hover:underline">Shop Your Way Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Sell</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sell on Shop Your Way</a></li>
                <li><a href="#" className="hover:underline">Teams</a></li>
                <li><a href="#" className="hover:underline">Forums</a></li>
                <li><a href="#" className="hover:underline">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Shop Your Way, Inc.</a></li>
                <li><a href="#" className="hover:underline">Policies</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Privacy Settings</a></li>
                <li>
                  <form className="mt-4">
                    <label htmlFor="newsletter" className="block mb-2">Subscribe to our newsletter</label>
                    <div className="flex">
                      <input type="email" id="newsletter" placeholder="Enter your email" className="flex-grow px-2 py-1 rounded-l text-black" />
                      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded-r">Subscribe</button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Shop Your Way, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopYourWayHomepage;
