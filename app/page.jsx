import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">AI Powered Prompts</span>
        </h1>
        <p>PromptVerse is a open source AI prompt tool to create and share your prompts</p>
      </section>
    <Feed />
    </div>
  );
};

export default Home;
