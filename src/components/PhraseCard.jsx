import './PhraseCard.css';
const PhraseCard = ({prop,handleChangePhrase}) => {
  return (
    <section className="grid grid-rows-[1fr,auto] min-h-screen">
      <article className="">
        <div className="relative">
          <h1 className="text-4xl font-[Dosis] textEffect font-extrabold max-w-[240px] mx-auto mt-[12vh]">
            GALLETAS DE LA FORTUNA
          </h1>
          {/* <h1 className="text-[21px] absolute mx-auto top-0 right-1/2 translate-x-1/2 text-[#cf8a0bcf] font-extrabold max-w-full">GALLETAS DE LA FORTUNA</h1> */}
        </div>
        <button
        className="text-[#893446] border-[#893446] border-[2px] bg-[#ffa645] py-1 px-5 rounded-xl mt-[4.7vh] font-semibold" 
        onClick={handleChangePhrase}
        >
          Probar mi suerte
          </button>
        <p className="bg-white text-[#727272] border-[#6894b4] border-[3px] max-w-[305px] rounded-2xl mx-auto px-7 py-8 font-medium mt-[4.7vh]">You dont have to be faster than the bear, you just have to be faster than the slowest guy who runs from it.</p>
      </article>
      <footer className="bg-white/70 text-[#727272] mx-auto my-[3vh] px-8 py-1 rounded-md">
        Fuente : {prop.author}
      </footer>
    </section>
  );
};
export default PhraseCard;