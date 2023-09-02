import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Card from "./components/Card";
import Accordion from "./components/Accordion";
import TabMenu from "./components/TabMenu";

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
  const accordionData = [
    {
      title: "Accordion Item 1",
      content: "Content for item 1 goes here.",
    },
    {
      title: "Accordion Item 2",
      content: "Content for item 2 goes here.",
    },
  ];
  const tabs = [
    {
      label: "Tab 1",
      content: <p>This is the content of Tab 1.</p>,
    },
    {
      label: "Tab 2",
      content: <p>This is the content of Tab 2.</p>,
    },
    {
      label: "Tab 3",
      content: (
        <div>
          <p>This is the content of Tab 3</p>
        </div>
      ),
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
        <div id="about" className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4 text-center">Tentang Kami</h1>
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">Tab Menu Example</h1>
          <TabMenu tabs={tabs} />
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
