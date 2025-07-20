export default function Navbar() {
  return (
    <nav className="bg-gray-900/ backdrop-blur-md text-white p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <ul className="flex space-x-4">
          <li><a href="/product" className="rounded-full px-4 py-2">Product</a></li>
          <li><a href="/pricing" className="rounded-full px-4 py-2">Pricing</a></li>
          <li><a href="/company" className="rounded-full px-4 py-2">Company</a></li>
          <li><a href="/blog" className="rounded-full px-4 py-2">Blog</a></li>
          <li><a href="/changelog" className="rounded-full px-4 py-2">Changelog</a></li>
        </ul>
        <a href="/login" className="rounded-full bg-gray-800 px-4 py-2">Login</a>
      </div>
    </nav>
  );
}