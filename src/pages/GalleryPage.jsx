import {useState, useEffect} from "react";
import Modal from "react-modal";
import { tarotCardJson } from "../data/cardJson";
import { AiOutlineClose } from "react-icons/ai";
import { getModalImageStyle } from "../helpers/imageSizing";
import NavMenu from "../components/NavMenu";
import "./Modal.css";

function GalleryPage() {
  let uriPrefix = "images/"
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalChild, setModalChild] = useState(null);
  const [filterValue, setValue] = useState("none");
  const [sortedArray, setState] = useState([]);

  useEffect(() => {
  }, [])

  const handleFilterChange = (event) => {
    setValue(event.target.value);
    let sortData = [...tarotCardJson]
    if (event.target.value === "recentDate") {
      let filteredData = sortData.filter(card => !!card["dateCompleted"])
      filteredData.sort((a, b) => {
        return new Date(b["dateCompleted"]) - new Date(a["dateCompleted"]);
      })
      setState(filteredData);
    }
    if (event.target.value === "dateCompleted") {
      let filteredData = sortData.filter(card => !!card["dateCompleted"])
      filteredData.sort((a, b) => {
        return new Date(a["dateCompleted"]) - new Date(b["dateCompleted"]);
      })
      setState(filteredData);
    }
  }

  function getTitle(card) {
    if (card.tag === "major") {
      return <div className="modal-title">{card["tarot-number"]+" "+card.name}</div>
    }
    else { return <div className="modal-title">{card.name}</div>}
  }

  function openModal(card) {
    setIsOpen(true)
    const imageStyle = getModalImageStyle(window.innerWidth, window.innerHeight);
    let imageChild = <div className="modal-div">
      <img className="cardImage" style={imageStyle} src={uriPrefix + card.uri}  alt={card.uri}/>

      <div className="card-details-container">
        {getTitle(card)}
        <div className="modal-created-date">{"Date completed: "+card.dateCompleted}</div>
        <div className="modal-dimension">{"Dimensions in inches: "+card.size}</div>
        <div className="modal-text">{card.text}</div>

        </div>
      </div>

    setModalChild(imageChild);
  }
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

  return (
    <>
      <div className="dropdownDiv" >
        <NavMenu />
        <select value= {filterValue} onChange={handleFilterChange}>
          <option value="none"></option>
          <option value="air">Air</option>
          <option value="earth">Earth</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="dateCompleted">In Order of Completion</option>
          <option value="recentDate">Most Recently Completed</option>
        </select>
      </div>
      <Modal className="modal"
        isOpen={modalIsOpen}
        contentLabel="Tarot Card Detail Modal"
        onRequestClose={() => setIsOpen(false)}
      >

        <button className="closeButton" onClick={() => setIsOpen(false)}>
          <AiOutlineClose/>
          </button>
        {modalChild}
      </Modal>
      { filterValue === "none" &&
        <>
        <h2 className="header">Major Arcana</h2>
        <div className="grid-container">
          {
            tarotCardJson.map(card =>{
              return card.tag === "major" ? (
              <div className="card-wrapper" onClick={()=> openModal(card)}>
                <img src={uriPrefix + card.uri}  alt={card.uri} loading="lazy"/>
                <div className="title">{card["tarot-number"]+" "+card.name}</div>
              </div>) : null
            })
          }
        </div>
        </>
      }
      { (filterValue === "none" || filterValue === "fire") &&
        <>
        <h2 className="header">Suit of Fire</h2>
        <div className="grid-container">
          {
            tarotCardJson.map(card =>{
              return card.tag === "fire" ? (
              <div className="card-wrapper" onClick={()=> openModal(card)}>
                <img src={uriPrefix + card.uri} alt={card.uri} loading="lazy"/>
                <div className="title">{card.name}</div>
              </div>) : null
            })
          }
        </div>
        </>
    }
    { (filterValue === "none" || filterValue === "air") &&
        <>
        <h2 className="header">Suit of Air</h2>
        <div className="grid-container">
          {
            tarotCardJson.map(card =>{
              return card.tag === "air" ? (
              <div className="card-wrapper" onClick={()=> openModal(card)}>
                <img src={uriPrefix + card.uri} alt={card.uri} loading="lazy"/>
                <div className="title">{card.name}</div>
              </div>) : null
            })
          }
        </div>
        </>
      }
      { (filterValue === "none" || filterValue === "water") &&
        <>
        <h2 className="header">Suit of Water</h2>
        <div className="grid-container">
          {
            tarotCardJson.map(card =>{
              return card.tag === "water" ? (
              <div className="card-wrapper" onClick={()=> openModal(card)}>
                <img src={uriPrefix + card.uri} alt={card.uri} loading="lazy"/>
                <div className="title">{card.name}</div>
              </div>) : null
            }

            )
          }
        </div>
        </>
    }
    { (filterValue === "none" || filterValue === "earth") &&
      <>
      <h2 className="header">Suit of Earth</h2>
      <div className="grid-container">
        {
          tarotCardJson.map(card =>{
            return card.tag === "earth" ? (
            <div className="card-wrapper" onClick={()=> openModal(card)}>
              <img src={uriPrefix + card.uri} alt={card.uri} loading="lazy"/>
              <div className="title">{card.name}</div>
            </div>) : null
          })
        }
      </div>
      </>
    }
    { (filterValue === "dateCompleted" || filterValue === "recentDate") &&
      <div className="grid-container">
        {
          sortedArray.map(card =>{
            return (
            <div className="card-wrapper" onClick={()=> openModal(card)}>
              <img src={uriPrefix + card.uri} alt={card.uri} loading="lazy"/>
              <div className="title">{card.name}</div>
            </div>)
          })
        }
      </div>
    }
    </>
  );
}

export default GalleryPage;
