import Link from 'next/link'
import {MenuIcon} from "lucide-react";

const ProjectsNavbar = () => {
    return (
        <div className="">
            <nav className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/app-layouts/public" className="text-xl font-semibold">
                            Projects route navbar
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="/projects"
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                All Projects
                            </Link>
                            <Link
                                href="/projects/web"
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                Web
                            </Link>
                            <Link
                                href="/projects/mobile"
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                Mobile
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default ProjectsNavbar