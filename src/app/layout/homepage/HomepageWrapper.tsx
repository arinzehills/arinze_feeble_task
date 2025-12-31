import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function HomepageWrapper() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, #0D7AFF 300%)",
      }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default HomepageWrapper;
