import NavMenu from "../components/NavMenu";
import "./AboutPage.css";

function AboutPage() {
    return (
       <>
        <div className="aboutTopBar">
            <NavMenu />
        </div>
        <div className="aboutPage">
            <h2 className="header">About the project</h2>
            <div className="about-text">
                <p>
                This deck has been a labor of many years, but one that saw its deepest focus during the pandemic.
                Many cards reflect the events and emotions of the time but hopefully retain a more universal applicablity.
                This deck is probably is not best for a newcomer to the tarot, as I have made several changes to address aspects of the tarot 
                that I either found frustrating or did not speak to me.
                <p></p>
                First, I have replaced the page, knight, queen and king with child, youth, adult and elder; roles we all inhabit given the time.
                Second, I've used the elements of fire, water, air and earth in place of wands, cups, swords and disks. I'm not the first to do so.
                I just found them to be a more fertile field for my imagination.
                Finally, I'm de-emphasizing the gendering of the various human qualities the tarot describes. We all contain multitudes.
                </p>
            </div>
        </div>
      </>
    );
}

export default AboutPage;