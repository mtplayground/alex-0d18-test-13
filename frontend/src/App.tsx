import { PRODUCT_NAME } from "@myclawteam/shared";
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <main className="min-h-screen bg-background px-6 text-foreground">
      <section className="mx-auto grid min-h-screen max-w-3xl place-content-center text-center">
        <p className="text-sm font-bold uppercase text-primary">{PRODUCT_NAME}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-6xl">
          Tailwind and shadcn/ui are configured
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          React, Vite, TypeScript, ESLint, and Prettier are ready for the next implementation
          issues.
        </p>
        <div className="mt-8 flex justify-center">
          <Button type="button">Sample shadcn Button</Button>
        </div>
      </section>
    </main>
  );
}
