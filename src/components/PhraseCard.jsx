import './PhraseCard.css';
const PhraseCard = ({prop,handleChangePhrase}) => {
  return (
    <section className="grid grid-rows-[1fr,auto] min-h-screen">
      <article className="">
        <div className="">
          <h1 className="text-4xl sm:text-6xl lg:text-5xl font-[Dosis] textEffect font-extrabold max-w-[220px] sm:max-w-[300px] mx-auto mt-[12vh] sm:mt-[9vh]">
            FORTUNE COOKIES
          </h1>
        </div>
        <button
        className="text-[#893446] sm:text-2xl border-[#893446] border-[2px] bg-[#ffa645] py-1 px-5 sm:px-8 sm:py-2 rounded-xl mt-[4.7vh] sm:mt-[6.3vh] font-normal" 
        onClick={handleChangePhrase}
        >
          Try my luck
          </button>
        <p className="bg-white text-[#727272] sm:text-3xl border-[#6894b4] border-[3px] max-w-[305px] sm:max-w-[520px] rounded-2xl mx-auto px-7 py-8 font-medium mt-[4.7vh] sm:mt-[6.3vh]">{prop.phrase}</p>
      </article>
      <footer className="bg-white/70 text-[#727272] mx-auto my-[4vh] text-sm sm:text-xl px-8 py-1 sm:py-3 rounded-md sm:rounded-2xl">
        Source : {prop.author}
      </footer>
    </section>
  );
};
export default PhraseCard;
