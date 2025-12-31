import Button from "@components/Button";

const Navbar = () => {
  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex justify-between items-center px-10 py-3 bg-white rounded-full border border-gray-200 shadow-sm w-[1200px] h-[81px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/img/logo.png" alt="coup" className="h-6 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 flex-1 justify-center items-center px-8">
          <a
            href="#features"
            className="text-sm text-gray-600 font-medium hover:text-black transition-colors border-b-2 border-blue-start pb-1"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-600 font-medium hover:text-black transition-colors"
          >
            Pricing
          </a>
          <a
            href="#usecases"
            className="text-sm text-gray-600 font-medium hover:text-black transition-colors"
          >
            Use Cases
          </a>
          <a
            href="#faq"
            className="text-sm text-gray-600 font-medium hover:text-black transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <Button
          buttonColor="bg-blue-start"
          textColor="text-white"
          withBorder={false}
          isCircular
          width="auto"
          height="h-10"
        >
          Contact Sales
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
