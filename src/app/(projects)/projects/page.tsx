'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, Globe, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Tailwind CSS',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
        tags: ['React', 'Node.js', 'Socket.io'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        title: 'AI Image Generator',
        description: 'Generate unique images using artificial intelligence',
        image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
        tags: ['Python', 'TensorFlow', 'React'],
        githubUrl: 'https://github.com',
    },
];

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">My Projects</h1>
                <p className="text-muted-foreground text-lg">
                    A collection of my recent work and side projects
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="group overflow-hidden border border-border/50 hover:border-border transition-colors"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-4 pt-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <GithubIcon className="h-4 w-4" />
                                        Source
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Globe className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}