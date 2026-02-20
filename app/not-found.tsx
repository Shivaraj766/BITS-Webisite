import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-[#0d1b4b] opacity-20 mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-[#0d1b4b] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
