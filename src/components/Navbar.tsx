import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/app-layouts/public" className="text-white text-xl font-bold">
                    Root Layout Navbar
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/app-layouts/public" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar