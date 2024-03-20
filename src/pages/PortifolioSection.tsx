import SectionTitle from "../components/sectionTitle";
import PortifolioCard from "../components/Portifolio/PortifolioCard";
import { useState } from "react";

const portidolioData = [
  {
    title: "onlineIDE",
    content:
      "Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode",
    impPath: "portfolio1.jpg",
  },
  {
    title: "chatApp",
    content:
      "Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode",
    impPath: "portfolio2.jpg",
  },
  {
    title: "Ecommerce",
    content:
      "Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode",
    impPath: "portfolio3.jpg",
  },
];
const PortifolioSection = () => {
  const [index, setIndex] = useState(0);

  const arrayLength = portidolioData.length;

  const handleLeftClick = () => {
    index === 0 ? setIndex(arrayLength - 1) : setIndex(index - 1);
  };

  const handleRightClick = () => {
    index === arrayLength - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <section className="portifolio" id="portifolio">
      <SectionTitle title="Portifolio" subtitle="Most Recent Work" />
      <PortifolioCard
        title={portidolioData[index].title}
        imgPath={portidolioData[index].impPath}
        content={portidolioData[index].content}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />

      <div className="portifolio-highlighterBox">
        <div className="portifolio-indexHighlighter">
          {portidolioData.map((i, ind) => (
            <div
              style={{
                backgroundColor: `${index === ind ? "blue" : "black"}`,
                height: "10px",
                width: "10px",
                borderRadius: "50%",
              }}
              id={"" + ind}
              onClick={() => setIndex(ind)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortifolioSection;
