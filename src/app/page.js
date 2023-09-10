import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Card from "./components/Card";
import Accordion from "./components/Accordion/Accordion";
import TabMenu from "./components/TabMenu";
import WaIcon from "./components/WaIcon";
import Wave from "./components/Wave";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Content1 from "./components/Accordion/content1";
import Content2 from "./components/Accordion/content2";
import FormTrying from "./components/FormTrying";

export default function Home() {
  const items = [
    {
      image: "https://images.pexels.com/photos/17588450/pexels-photo-17588450/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Terjemah naskah non-akademik seperti buku manual petunjuk, artikel website, business plan / executive summary, naskah pidato, motivation letter, study plan, buku-buku, project proposal, dan naskah umum lainnya.",
      instagramUrl: "instagram url here",
      title: "Translation",
      icon: "simple-line-icons:book-open",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Menerjemahkan textbook, manuskrip untuk jurnal ilmiah / conference proceeding, research proposal dsb.",
      instagramUrl: "instagram url here",
      title: "Proofread",
      icon: "ps:book",
    },
    {
      image: "https://images.pexels.com/photos/17640285/pexels-photo-17640285/free-photo-of-lumineux-mode-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      caption: "Koreksi (proofreading) dan penyempurnaan naskah berbahasa inggris, meliputi grammar & spelling checking, phrase & collocation, content's logic & flow, dan reference's consistency & completeness.",
      instagramUrl: "instagram url here",
      title: "Editing",
      icon: "iconoir:page-edit",
    },
  ];
  const accordionData = [
    {
      title: "Title content here",
      content: <Content2 />,
    },
    {
      title: "Title content here",
      content: <Content1 />,
    },
  ];
  const tabs = [
    {
      label: "Title content here",
      content: <p>Content here</p>,
    },
    {
      label: "Title content here",
      content: (
        <div>
          <p>Content here</p>
        </div>
      ),
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
    <main className="bg-black text-white">
      <section className="lg:h-screen h-[80vh] bg-hero">
        <Navbar />
        <HomePage />
      </section>

      <section>
        <div className="px-2 mx-auto flex justify-center flex-col gap-5 my-16">
          <h1 className="uppercase text-center text-4xl text-[#DAA520] text-semibold">Jasa Layanan Kami</h1>
          <div className="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {items.map(({ caption, title, icon }, index) => {
              return <Card key={index} caption={caption} title={title} icon={icon} />;
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

      {/* <section>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">Berapa harga jasa kami ?</h1>
          <TabMenu tabs={tabs} />
        </div>
      </section> */}

      <section>
        <WaIcon />
      </section>

      {/* <section>
        <div className="container mx-auto p-4">
          <FormTrying />
        </div>
      </section> */}

      <section>
        <div className="container mx-auto p-4">
          <Form />
        </div>
      </section>

      {/* <section>
        <Wave />
      </section> */}

      <section>
        <Footer />
      </section>
    </main>
  );
}
