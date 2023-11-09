import Banner from "@components/layout/Banner";
import Products from "@components/homeProducts/Products";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-22 mb-10">
          <Products />
        </div>
      </div>
    </main>
  );
}
