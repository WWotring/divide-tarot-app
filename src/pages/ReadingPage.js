import { useState } from "react";
import { tarotCardJson } from "../data/cardJson";
import { drawRandomCards } from "../helpers/drawCards";
import NavMenu from "../components/NavMenu";
import "./ReadingPage.css";

function ReadingPage() {
  const [drawnCards, setDrawnCards] = useState([]);
  const uriPrefix = "images/";

  function handleDraw() {
    setDrawnCards(drawRandomCards(tarotCardJson, 3));
  }

  function getTitle(card) {
    return card.tag === "major" ? card["tarot-number"] + " " + card.name : card.name;
  }

  return (
    <>
      <div className="readingTopBar">
        <NavMenu />
      </div>
      <div className="readingPage">
        <h2 className="header">3 Card Reading</h2>
        <button className="drawButton" onClick={handleDraw}>Draw 3 Cards</button>
        {drawnCards.length > 0 &&
          <div className="reading-row">
            {drawnCards.map(card => (
              <div className="reading-card" key={card.uri}>
                <div className="card-wrapper reading-card-frame">
                  <img className="readingCardImage" src={uriPrefix + card.uri} alt={card.uri}/>
                  <div className="title">{getTitle(card)}</div>
                </div>
                <div className="reading-card-text">{card.text}</div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
}

export default ReadingPage;
