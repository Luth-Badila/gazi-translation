import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Card from "./components/Card";

export default function Home() {
  const items = [
    {
      image: "https://images.pexels.com/photos/17588450/pexels-photo-17588450/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda untuk menerjemahkan teks baik untuk tugas sekolah, kuliah, penelitian maupun pekerjaan anda",
      instagramUrl: "instagram url here",
      title: "Translation",
      icon: "bx:edit",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda mengkoreksi tulisan anda agar tidak ada typo dan sesuai dengan EYD ata Grammar",
      instagramUrl: "instagram url here",
      title: "Proofread",
      icon: "ph:read-cv-logo-bold",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Kami membantu anda merubah tulisan agar sesuai dengan EYD atau Grammar",
      instagramUrl: "instagram url here",
      title: "Editing",
      icon: "ant-design:translation-outlined",
    },
  ];
  return (
    <main>
      <section className="lg:h-screen h-[80vh] bg-hero">
        <Navbar />
        <HomePage />
      </section>

      <section>
        <div className="px-2 mx-auto flex justify-center flex-col gap-3 my-16">
          <h1 className="uppercase text-center text-4xl text-[#DAA520] text-semibold">Jasa Layanan Kami</h1>
          <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {items.map(({ caption, image, instagramUrl, title, icon }, index) => {
              return <Card key={index} caption={caption} image={image} instagramUrl={instagramUrl} title={title} icon={icon} />;
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <Gallery />
        </div>
      </section>
    </main>
  );
}
