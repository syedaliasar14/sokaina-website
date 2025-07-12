import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row flex-grow max-w-7xl w-full md:px-10 py-8">
        <div className="relative flex overflow-hidden w-full h-[400px] md:h-full self-center md:self-start md:mr-8 md:mb-0 mb-8">
          <img
            className="w-full h-full object-cover"
            src={'/about.jpg'}
            alt="About"
          />
        </div>
        <div className="w-full text-left md:self-start pt-10 px-10 md:pt-0 md:px-0">
          <h1 className="text-3xl md:text-4xl tracking-widest mb-8">ABOUT SOKAINA</h1>
          <div className="flex flex-col gap-4 w-full">
            <p>Sokaina Asar is a multi-disciplinary professional whose work bridges fine art, architecture, and neuroscience. With a Master&apos;s degree in Architecture from Pratt Institute and a Bachelor&apos;s degree in Neuroscience from the University of Connecticut, Sokaina uniquely integrates creative and scientific insights into her projects.</p>
            <p>Her architectural training at Pratt instilled a keen eye for design and a deep appreciation for merging artistic principles with structural integrity. Meanwhile, her background in neuroscience provides a profound understanding of human cognition and perception, which she seamlessly incorporates into her architectural and artistic work to enhance user experience.</p>
            <p>Sokaina&apos;s career spans a diverse range of projects, from designing innovative architectural spaces to creating immersive art installations. Her work explores the relationship between space, structure, and the human mind, aiming to craft experiences that are both visually captivating and intellectually enriching.</p>
            <p>Believing that the best designs resonate on both emotional and cognitive levels, Sokaina combines her neuroscience expertise with her architectural skills and artistic sensibilities. Her goal is to push the boundaries of traditional design and art, creating spaces that are as thought-provoking as they are beautiful.</p>
            <p>Explore Sokaina&apos;s portfolio to learn more about her work. For collaborations or inquiries, feel free to reach out—Sokaina is always eager to connect with fellow enthusiasts and professionals in the fields of art, architecture, and neuroscience.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}