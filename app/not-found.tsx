import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="text-4xl font-bold mb-3">404</h1>
      <p className="text-muted-foreground mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  );
}
