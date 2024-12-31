import { CiHome } from "react-icons/ci";
function Menu() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* LOGO */}
      <div className="flex items-center justify-center h-20">
        <img src="/path-to-logo.png" alt="logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-semibold">JS HEAVEN</h1>
      </div>
      
      {/* MENU */}
      <div className="flex flex-col items-center w-full mt-10">
        <a href="#" className="btn btn-ghost w-4/5 mb-4 hover:bg-blue-200">
        <CiHome  className="inline-block text-xl font-semibold"/>
          <span className="inline-block text-2xl font-thin">Home</span>
        </a>
        <a href="#" className="btn btn-ghost w-4/5 mb-4 hover:bg-blue-200">
        <span className="inline-block text-2xl font-thin">Teachers</span>
        </a>
        <a href="#" className="btn btn-ghost w-4/5 mb-4 hover:bg-blue-200">
        <span className="inline-block text-2xl font-thin">Students</span>
        </a>
        <a href="#" className="btn btn-ghost w-4/5 mb-4 hover:bg-blue-200">
        <span className="inline-block text-2xl font-thin">Classes</span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
