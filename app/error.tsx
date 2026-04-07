"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground px-6">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-muted-foreground text-center max-w-xl">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
