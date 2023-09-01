import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Card from "./components/Card";

export default function Home() {
  const items = [
    {
      image: "https://images.pexels.com/photos/17588450/pexels-photo-17588450/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "beautiful image",
      instagramUrl: "instagram url here",
      title: "Translation",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "nature image",
      instagramUrl: "instagram url here",
      title: "Proofread",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "nature image",
      instagramUrl: "instagram url here",
      title: "Editing",
    },
  ];
  return (
    <main>
      <section className="h-screen bg-hero">
        <Navbar />
        <HomePage />
      </section>

      <section>
        <div className="px-2 mx-auto flex justify-center flex-col gap-3 my-16">
          <h1 className="uppercase text-center text-4xl text-[#DAA520] text-semibold">Jasa Layanan Kami</h1>
          <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {items.map(({ name, image, instagramUrl, title }, index) => {
              return <Card key={index} name={name} image={image} instagramUrl={instagramUrl} title={title} />;
            })}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="w-full">
          <Gallery />
        </div>
      </section> */}
    </main>
  );
}
