import { ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const categories = [
  "Technology",
  "Design",
  "Programming",
  "AI & Machine Learning",
  "Productivity",
  "Business",
  "Health",
  "Education",
];

// ✅ Fully dynamic blog post data with fixed 7th image (index 6)
const blogPosts = [
  {
    title: "Building a Modern Web App with React and Tailwind",
    description:
      "Learn how to quickly build responsive, modern web apps using React and Tailwind CSS.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
  },
  {
    title: "Design Systems That Scale",
    description:
      "Explore how to create consistent and scalable design systems used by top companies.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "Mastering TypeScript for Large Projects",
    description:
      "TypeScript improves code quality and scalability. Learn how to apply it effectively.",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
  },
  {
    title: "Understanding Neural Networks in 10 Minutes",
    description:
      "A simple breakdown of how neural networks learn and power modern AI systems.",
    category: "AI & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read",
  },
  {
    title: "Top 10 Productivity Tools for Developers",
    description:
      "Boost your productivity with these essential tools for developers in 2025.",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
  },
  {
    title: "How to Build a Startup on a Budget",
    description:
      "Step-by-step guide to validating your business idea and building your MVP affordably.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read",
  },
  {
    title: "Healthy Work Habits for Remote Developers",
    description:
      "Remote work is great—but can hurt your health. Here’s how to balance work and wellness.",
    category: "Health",
    // ✅ Replaced with a different Unsplash image that loads reliably
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
  },
  {
    title: "Lifelong Learning: Staying Relevant in Tech",
    description:
      "Why continuous education is the key to staying ahead in the ever-changing tech world.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    readTime: "9 min read",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Latest Posts</h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
        {blogPosts.map((post, i) => (
          <Card
            key={i}
            className="shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl border border-border/50 bg-card"
          >
            <CardHeader className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 text-xs">
                  {post.category}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                {post.description}
              </p>

              <Button
                size="sm"
                variant="ghost"
                className="px-0 text-primary hover:text-primary/80 font-medium"
              >
                Read more <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories Section */}
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 border border-border/50 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer border rounded-lg py-3 px-4 hover:bg-primary/5 transition-all"
              >
                <span>{category}</span>
                <ChevronRight className="h-4 w-4 opacity-70" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage;
