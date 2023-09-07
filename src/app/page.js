import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Card from "./components/Card";
import Accordion from "./components/Accordion";
import TabMenu from "./components/TabMenu";
import WaIcon from "./components/WaIcon";
import Wave from "./components/Wave";
import Footer from "./components/Footer";
import Form from "./components/Form";

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
      title: "Berapa harga jasa kami ?",
      content: (
        <div className="flex lg:flex-row flex-col gap-5">
          <div>
            <h1>Abstrak</h1>
            <p>Instan 24 jam - 45.000</p>
            <p>Reguler 3 hari - 40.000</p>
            <p>Standart 7 hari - 35.000</p>
          </div>
          <div>
            <h1>Jurnal Lokal</h1>
            <p>Instan 24 jam - 55.000 (standar dosen)</p>
            <p>Reguler 3 hari - 45.000</p>
          </div>
        </div>
      ),
    },
    {
      title: "Bagaimana saya bisa menghubungi penerjemah ?",
      content: "Kamu bisa menulis catatan kepada penerjemah sebelum proses terjemahan dilakukan atau hubungi langsung tim  kami",
    },
  ];
  const tabs = [
    {
      label: "Abstrak",
      content: <p>Instan - Rp 40.000</p>,
    },
    {
      label: "Artikel Kuliah (dari skripsi)",
      content: (
        <div>
          <p>Instan 24 jam - Rp 45.000</p>
          <p>Reguler 3 hari - Rp 40.000</p>
          <p>Standar 7 hari - Rp 35.000</p>
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

      <section>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">Berapa harga jasa kami ?</h1>
          <TabMenu tabs={tabs} />
        </div>
      </section>

      <section>
        <WaIcon />
      </section>

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
