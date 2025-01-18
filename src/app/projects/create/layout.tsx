'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <nav className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="text-xl font-semibold">
                            Projects/create Navbar
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="/projects"
                                className="text-foreground/80 hover:text-foreground transition-colors"
                            >
                                Create
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
            <main>{children}</main>
        </div>
    );
}