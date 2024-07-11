const Story = () => {
  const divStyle = {
    fontFamily: "Poppins",
  };
  return (
    <div className="pl-12 pr-12 mb-10">
      <div className="flex items-end gap-1">
        <h1 className="font-bold text-[60px]">
          Story <span className="text-purple-500">.</span>
        </h1>
      </div>
      <div className="flex justify-center items-center  h-[auto] mt-10 ">
        <h1 style={divStyle} className=" text-xl">
          My fascination with{" "}
          <span className="text-purple-500">web development</span> began during
          my college years when I discovered the power of transforming ideas
          into tangible digital solutions. Fuelled by curiosity and a desire to
          learn, I<span className="text-purple-500"> immersed</span> myself in
          various programming languages and{" "}
          <span className="text-purple-500">frontend technologies</span> ,
          honoring my skills through online courses, personal projects, and
          collaborative ventures
        </h1>
      </div>
    </div>
  );
};
export default Story;
