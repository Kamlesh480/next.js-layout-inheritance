'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const projectSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(10, {
        message: 'Description must be at least 10 characters.',
    }),
    category: z.string({
        required_error: 'Please select a category.',
    }),
    image: z.string().url({
        message: 'Please enter a valid URL.',
    }),
    githubUrl: z.string().url({
        message: 'Please enter a valid URL.',
    }).optional(),
    liveUrl: z.string().url({
        message: 'Please enter a valid URL.',
    }).optional(),
    tags: z.string().min(2, {
        message: 'Please enter at least one tag.',
    }),
});

export default function CreateProject() {
    const form = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: '',
            description: '',
            category: '',
            image: '',
            githubUrl: '',
            liveUrl: '',
            tags: '',
        },
    });

    function onSubmit(values: z.infer<typeof projectSchema>) {
        console.log(values);
        // Here you would typically send the data to your backend
    }

    return (
        <div className="p-6 md:p-8">
            <div className="space-y-2 mb-8">
                <h1 className="text-2xl font-semibold tracking-tight">Create Project</h1>
                <p className="text-muted-foreground">
                    Add a new project to your portfolio.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="My Awesome Project" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the name that will be displayed for your project.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your project..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    A brief description of what your project does.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="mobile">Mobile Development</SelectItem>
                                        <SelectItem value="desktop">Desktop Application</SelectItem>
                                        <SelectItem value="ai">AI/Machine Learning</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Choose the category that best fits your project.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cover Image URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://example.com/image.jpg" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Provide a URL for the project cover image.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="githubUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>GitHub URL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://github.com/username/repo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="liveUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Live Demo URL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://myproject.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <Input placeholder="React, TypeScript, Tailwind (comma separated)" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Add tags separated by commas to help categorize your project.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end">
                        <Button type="submit" size="lg">
                            Create Project
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}