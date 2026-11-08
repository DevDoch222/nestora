import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-surface px-6 py-20">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-muted">
          The page you’re looking for doesn’t exist in this Nestora Homes demo.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back Home</Button>
          <Button href="/listings" variant="secondary">
            Browse Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
