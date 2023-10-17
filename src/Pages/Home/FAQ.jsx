const FAQ = () => {
  return (
    <div className="my-10">
      <p className="uppercase text-[#333] text-base tracking-widest">FIND YOUR ANSWER HERE</p>
      <h2 className="text-4xl text-[#333] font-medium">
        Frequently <span className="font-extrabold">Asked Questions.</span>
      </h2>
      <div className="join join-vertical w-full mt-5">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
      <button className="uppercase bg-[#D81517] text-white text-base p-5 hover:bg-gray-600 font-semibold">Make a question</button>
      </div>
    </div>
  );
};

export default FAQ;
