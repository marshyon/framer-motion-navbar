import { AnimatePresence, motion, useCycle } from "framer-motion";
import './App.css';


const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 }
];

function App() {
  const [open, cycleOpen] = useCycle(false, true);


  return (
    <div className="">

      <nav className="p-4 mb-1 flex items-center justify-between">
        <div>LOGO</div>

        <div className="hidden md:flex">

          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="p-2"
            >
              {name}
            </a>
          ))}
        </div>
        <button 
        className={`md:hidden ${open ? "open" : ""} z-40 block hamburger w-full md:hidden focus:outline-none`}
        onClick={cycleOpen} 
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </button>
      </nav>

      <AnimatePresence>

        {open && (
          <motion.div
            className="p-2 flex flex-col"
            initial={{ 
              height: 0, 
              opacity: 0
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                duration: 0.2,
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { 
                delay: 0.1, 
                duration: 0.2, 
              }
            }}

          >
            {links.map(({ name, to, id }) => (
              <a
                key={id}
                href={to}
                className="p-2"
              >
                {name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      <main>
        <div className="p-4">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
