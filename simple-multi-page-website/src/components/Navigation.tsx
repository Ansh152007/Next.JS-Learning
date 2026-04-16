import Link from "next/link";

export const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-50 opacity-90 backdrop:blur-3xl text-black w-full font-bold text-xl">
        <div>
          <img className="w-8" src="/favicon.ico" alt="Company Logo" />
        </div>
        <ul className="flex space-x-4 pr-4">
          <li><Link className="underlineAnimation" href="/">Home</Link></li>
          <li><Link className="underlineAnimation" href="/about">About</Link></li>
          <li><Link className="underlineAnimation" href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

