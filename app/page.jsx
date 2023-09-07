'use client';
import './globals.css'
import React from 'react';

export default function Home() {

  const [Gallery, SetGallery] = React.useState(false);
  const [Url, SetUrl] = React.useState('1');
  const [FirstRender, SetFirstRender] = React.useState(true);
  const ImageIndex = React.useRef(1);


  const disablescroll = function(ev) {
    ev.addEventListener('scroll', console.log('yes'));
    if(Gallery) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  const faq = function(ev) {
    if(!Gallery) {
      ev.querySelector('.answer').classList.toggle('grown');
      ev.querySelector('i').classList.toggle('fa-plus');
      ev.querySelector('i').classList.toggle('fa-minus');
    }
  }

  const openimage = function(ev) {
    if(!Gallery) {
      SetGallery(old => !old);
    }

    SetUrl(ev.id);
    ImageIndex.current = ev.id;
  }

  const closeimage = function(ev) {

    let XClicked = false;

    if(ev.id === 'xmark') {
      XClicked = true;
    }

    if(Gallery && XClicked) {
      SetGallery(old => !old);
    }
  }

  const count = function(ev) {

    if(ev.id === 'leftarrow') {
    
      if(ImageIndex.current === 1 || FirstRender) {
        ImageIndex.current = 17;
      } else {
        ImageIndex.current--;
      }
      SetUrl(ImageIndex.current);

    } else {

      if(ImageIndex.current === 17) {
        ImageIndex.current = 1;
      } else {
        ImageIndex.current++;
      }
      SetUrl(ImageIndex.current);

    }
    SetFirstRender(false);
  }

  return (
    <div className='page' onClick={(e) => closeimage(e.target)} onScroll={(e) => disablescroll(e)}>

      <div className="slideshow" style={{display: Gallery ? '' : 'none'}}>

        <i id='xmark' className="fa-solid fa-xmark"></i>

        <div className="slide">
          
          <img src="/images/triangle.png" alt="left arrow" id="leftarrow" className='arrow' onClick={(e) => count(e.target)}/>

          <div className="bigimagecontainer">
            <img src={`/images/${Url}.jpg`} alt="image" className="bigimage"/>
            <h1 className="imagesleft">{ImageIndex.current}/17</h1>
          </div>

          <img src="/images/triangle.png" alt="right arrow" id="rightarrow" className='arrow' onClick={(e) => count(e.target)}/>

        </div>

      </div>

      <nav className='navigation pad'>

        <ul className="navul">

          <li className="navli">
            <a href="">thing1</a>
          </li>

          <li className="navli">
            <a href="">thing2</a>
          </li>

          <li className="navli">
            <a href="">thing3</a>
          </li>

        </ul>

        <img src="/images/logo.jpeg" alt="logo" height='100' width='100'/>

        <i className="fa-solid fa-bars" style={{color: 'rgb(0, 149, 255)'}}></i>

      </nav>

      <header className='header'>
        <h1>דבר כזה עוד לא ראיתם</h1>
      </header>

      <main className='main'>

        <hr className="linebreak" />

        <section className="questions">

          <h1 className='sectiontitle'>שאלות נפוצות</h1>

          <ul className="questionscontainer">

            <li className="question" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?אז מה המשחק</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>םגכחעגםכחע גכםעןחגכפעםחגכפםעח גכםעןחגכפם עחגפכםעח םגכחע םגכחעפםגןכחעםגןכחעםג גכםעןחגכםעןחגכםעחגםכןח</p>
                </div>
            </li>

            <li className="question" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?איפה משחקים</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>םגכחעגםכחע גכםעןחגכפעםחגכפםעח גכםעןחגכפם עחגפכםעח םגכחע םגכחעפםגןכחעםגןכחעםג גכםעןחגכםעןחגכםעחגםכןח</p>
                </div>
            </li>

            <li className="question" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?למי זה מתאים</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>םגכחעגםכחע גכםעןחגכפעםחגכפםעח גכםעןחגכפם עחגפכםעח םגכחע םגכחעפםגןכחעםגןכחעםג גכםעןחגכםעןחגכםעחגםכןח</p>
                </div>
            </li>

            <li className="question" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?שאלה</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>םגכחעגםכחע גכםעןחגכפעםחגכפםעח גכםעןחגכפם עחגפכםעח םגכחע םגכחעפםגןכחעםגןכחעםג גכםעןחגכםעןחגכםעחגםכןח</p>
                </div>
            </li>

            <li className="question" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?שאלה</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>םגכחעגםכחע גכםעןחגכפעםחגכפםעח גכםעןחגכפם עחגפכםעח םגכחע םגכחעפםגןכחעםגןכחעםג גכםעןחגכםעןחגכםעחגםכןח</p>
                </div>
            </li>
            

          </ul>

        </section>

        <hr className="linebreak"/>

        <section className="gallery">

          <h1 className='sectiontitle'>גלריה</h1>

          <div className="imagescontainer pad">

            <div id='1' className="image" style={{backgroundImage: 'URL(/images/1.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
            <div id='2' className="image" style={{backgroundImage: 'URL(/images/2.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
            <div id='3' className="image" style={{backgroundImage: 'URL(/images/3.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
          </div>

        </section>

        <hr className="linebreak" />

      </main>

      <footer className='footer pad'>

        <div className="socialtop">

          <a href="https://www.instagram.com/jellyxtreme/">
            <i className="fa-brands fa-instagram" style={{color: 'rgb(0, 149, 255)'}}></i>
          </a>

          <a href="https://www.facebook.com/profile.php?id=61551043527964">
            <i className="fa-brands fa-facebook-f" style={{color: 'rgb(0, 149, 255)'}}></i>
          </a>

        </div>

        <div className="contacts">

          <div className="contactContainer">
            <p className='contact'>052-6242-225</p>
            <i className="fa-solid fa-phone-flip" style={{color: 'rgb(0, 149, 255)'}}></i>
          </div>

          <div className="contactContainer">
            <p className='contact'>jellyyyyyx@gmail.com</p>
            <i className="fa-solid fa-envelope" style={{color: 'rgb(0, 149, 255)'}}></i>
          </div>

          <div className="contactContainer">
            <p className='contact'>סינמה סיטי ירושלים</p>
            <i className="fa-solid fa-location-dot" style={{color: 'rgb(0, 149, 255)'}}></i>
          </div>

        </div>

        <div className="socialbottom">

          <a href="https://www.instagram.com/jellyxtreme/">
            <i className="fa-brands fa-instagram" style={{color: 'rgb(0, 149, 255)'}}></i>
          </a>

          <a href="https://www.facebook.com/profile.php?id=61551043527964">
            <i className="fa-brands fa-facebook-f" style={{color: 'rgb(0, 149, 255)'}}></i>
          </a>

        </div>

      </footer>

    </div>
  )
}