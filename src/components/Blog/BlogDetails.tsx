import { useParams } from "react-router-dom"; // ✅ FIXED import
import { Button } from "../ui/button";

// Define the type for a blog post
interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

// Use the same posts as in BlogPage (or import them)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Modern Web App with React and Tailwind",
    description:
      "Learn how to quickly build responsive, modern web apps using React and Tailwind CSS.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Design Systems That Scale",
    description:
      "Explore how to create consistent and scalable design systems used by top companies.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Mastering TypeScript for Large Projects",
    description:
      "TypeScript improves code quality and scalability. Learn how to apply it effectively.",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Understanding Neural Networks in 10 Minutes",
    description:
      "A simple breakdown of how neural networks learn and power modern AI systems.",
    category: "AI & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Top 10 Productivity Tools for Developers",
    description:
      "Boost your productivity with these essential tools for developers in 2025.",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "How to Build a Startup on a Budget",
    description:
      "Step-by-step guide to validating your business idea and building your MVP affordably.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Healthy Work Habits for Remote Developers",
    description:
      "Remote work is great—but can hurt your health. Here’s how to balance work and wellness.",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Lifelong Learning: Staying Relevant in Tech",
    description:
      "Why continuous education is the key to staying ahead in the ever-changing tech world.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>(); // ✅ gets :id from URL

  // ✅ Safely convert id to number and find post
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <p className="text-center py-20 text-lg text-muted-foreground">
        Post not found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-2xl w-full mb-8 shadow-md"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-8">{post.description}</p>

      <Button onClick={() => window.history.back()}>
        ← Back to Blog
      </Button>
    </div>
  );
};

export default BlogDetails;
