import { PRODUCT_NAME } from "@myclawteam/shared";
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <main className="min-h-screen bg-background px-page-x text-foreground">
      <section className="mx-auto grid min-h-screen max-w-content place-content-center py-section text-center">
        <p className="font-heading text-eyebrow uppercase text-primary">{PRODUCT_NAME}</p>
        <h1 className="mt-gutter font-heading text-display-md">
          Tailwind <span className="text-primary">theme tokens</span> are defined
        </h1>
        <p className="mx-auto mt-rhythm max-w-copy text-body-lg text-muted-foreground">
          Near-black surfaces, bright orange accents, bold sans-serif headings, and responsive
          spacing are available as reusable Tailwind tokens.
        </p>
        <div className="mt-rhythm flex justify-center">
          <Button type="button">Sample shadcn Button</Button>
        </div>
      </section>
    </main>
  );
}
