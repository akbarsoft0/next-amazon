import Banner from "@components/Banner";
import Products from "@components/Products";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
      </div>
      <div className="relative max-w-screen-2xl mx-auto ">
        <Products />
      </div>
    </main>
  );
}
