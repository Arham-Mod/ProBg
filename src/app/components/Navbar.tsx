export default function Navbar() {
  return (
    <nav className="bg-gray-900/60 backdrop-blur-lg text-white p-6 sticky top-0 z-10">
      <div className="box nav-box w-50 h-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <ul className="flex space-x-23 justify-center flex-grow"> {/* Right-align ul items */}
            <li><a href="/product" className="hover:text-gray-300">Product</a></li>
            <li><a href="/pricing" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="/company" className="hover:text-gray-300">Company</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/changelog" className="hover:text-gray-300">Changelog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}