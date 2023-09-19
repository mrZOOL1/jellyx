'use client';

import './globals.css'
import React from 'react';

export default function Home() {

  const [Gallery, SetGallery] = React.useState(false);
  const [Url, SetUrl] = React.useState('1');
  const [NavOpen, SetNavOpen] = React.useState(false);
  const ImageIndex = React.useRef(1);

  const faq = function(ev) {

    if(!Gallery) {
      ev.querySelector('.answer').classList.toggle('grown');
      ev.querySelector('i').classList.toggle('fa-plus');
      ev.querySelector('i').classList.toggle('fa-minus');
    }

  }

  const openimage = function(ev) {

    if(!Gallery) {

      if(NavOpen) {SetNavOpen(false);}
      SetGallery(old => !old);
      
    }

    SetUrl(ev.id);
    ImageIndex.current = ev.id;

  }

  const closeimage = function(ev) {

      SetGallery(old => !old);
      const bottom = document.querySelector('footer');
      bottom.scrollIntoView();
  }

  const count = function(ev) {

    if(ev.id === 'leftarrow') {
    
      if(ImageIndex.current === 1 || Url === '1') {
        ImageIndex.current = 20;
      } else {
        ImageIndex.current--;
      }
      SetUrl(ImageIndex.current);

    } else {

      if(ImageIndex.current === 20) {
        ImageIndex.current = 1;
      } else {
        ImageIndex.current++;
      }
      SetUrl(ImageIndex.current);

    }
  }

  const opennav = function(ev) {

    SetNavOpen(true)

  }

  const closenav = function(ev) {

    SetNavOpen(false)

  }

  return (
    
    <div className='page'>

      <div className="slideshow" style={{display: Gallery ? '' : 'none'}}>

        <i id='xmark' className="fa-solid fa-xmark" onClick={(e) => closeimage(e.target)}></i>
        
        <div className="slide">
          
          <img src="/images/triangle.png" alt="left arrow" id="leftarrow" className='arrow' onClick={(e) => count(e.target)}/>

          <div className="bigimagecontainer">
            <img src={`/images/${Url}.jpg`} alt="image" className="bigimage"/>
            <h1 className="imagesleft">{Url}/20</h1>
          </div>

          <img src="/images/triangle.png" alt="right arrow" id="rightarrow" className='arrow' onClick={(e) => count(e.target)}/>

        </div>

      </div>

      <nav className='navigation' style={{display: NavOpen ? 'none' : ''}}>

        <img className='wideimg' src="/images/whitelogo.png" height='80' alt="logo"/>

        <ul className="wideul">

          <li className="navli"><a href="https://www.jerusalempaintball.com/">פיינטבול</a></li>

          <li className="navli"><a href="http://www.alphateamextreme.com/PAGE14.asp">ווטר טאג</a></li>

          <li className="navli"><a href="http://www.alphateamextreme.com/">לייזר טאג</a></li>

        </ul>

        <ul className="thinul">

          <img src="/images/whitelogo.png" height='50' alt="logo"/>

          <i className="fa-solid fa-bars" onClick={opennav}></i>

        </ul>

      </nav>

      <nav className="phonenavigation"  style={{display: NavOpen ? '' : 'none'}}>

        <ul className="phonelinks">

          <li><i id='navxmark' className="fa-solid fa-xmark"  onClick={(e) => closenav()}></i></li>

          <li className="phoneli"><a href="https://www.jerusalempaintball.com/">פיינטבול</a></li>

          <li className="phoneli"><a href="http://www.alphateamextreme.com/PAGE14.asp">ווטר טאג</a></li>

          <li className="phoneli"><a href="http://www.alphateamextreme.com/">לייזר טאג</a></li>

        </ul>

      </nav>

      <header className='header' style={{transform: NavOpen ? 'translateY(-200px)' : 'translateY(-100px)'}}>
        <h1>ברוכים הבאים<br/>JellyX</h1>
      </header>

      <main className='main'>

        <hr className="linebreak" />

          <section className="info">

            <h1 className='sectiontitle'>?אז מה זה ג'ליבול</h1>

            <div className="textcontainer">

            <p className="text">
            ג׳ליבול הוא משחק ספורטיבי חדש שבו שתי קבוצות מתמודדות אחת נגד השנייה במטרה לפגוע כמה שיותר בשחקני הקבוצה היריבה עם רובי ג׳ליבול
            <br />
            <br />
            המשחקים בעלי אופי מהיר ותחרותי,
            אין צורך בציוד ישן וכבד בשביל לשחק ככה שאתם תוכלו בקלות להתרכז במשחק ולהנות מהחוויה   
            <br />
            <br />
            המשחק דורש יציבות, טכניקה, תקשורת בין השחקנים ואי אפשר שלא להנות ממנו
            </p>

            </div>

          </section>

        <hr className="linebreak" />

        <section className="questions">

          <h1 className='sectiontitle'>שאלות נפוצות</h1>

          <ul className="questionscontainer">

            <li className="question noSelect" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?כמה זמן המשחק</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>
                    משך הפעילות הוא כשעה וניתן להאריכה עם עוד סבבים
                  </p>
                </div>
            </li>

            <li className="question noSelect" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?איפה משחקים</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>
                    במתחם שלנו על גג הסינמה סיטי בירושלים או במקום לבחירתם שאליו נגיע
                  </p>
                </div>
            </li>

            <li className="question noSelect" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?למי זה מתאים</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>
                    הפעילות מתאימה החל מגיל 7 ולקבוצות של 8 עד 50 משתתפים 
                  </p>
                </div>
            </li>

            <li className="question noSelect" onClick={(e)=>faq(e.currentTarget)}>
              <div className="questiontop">
                <p className="questiontitle">?האם זה כואב</p>
                <i className='fa-solid fa-plus' style={{color: 'black'}}></i>
              </div>
                <div className="answer">
                  <p>
                    !התשובה היא לא
                    <br />
                    בניגוד למשחקים אחרים הג'ליבול לא מכאיב ואינו משאיר לכלוך או סימנים
                  </p>
                </div>
            </li>
            
          </ul>

        </section>

        <hr className="linebreak"/>

        <section className="gallery">

          <h1 className='sectiontitle'>גלריה</h1>

          <div className="imagescontainer">
            <div id='1' className="image" style={{backgroundImage: 'URL(/images/1.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
            <div id='2' className="image" style={{backgroundImage: 'URL(/images/2.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
            <div id='3' className="image" style={{backgroundImage: 'URL(/images/3.jpg)', scale: Gallery && 1}} onClick={(e) => openimage(e.currentTarget)}></div>
          </div>

        </section>

        <hr className="linebreak" />

      </main>

      <footer className='footer'>

        <h1 className="sectiontitle">🤙דברו איתנו</h1>

        <div className="footercontainer">

          <div className="socialtop">

            <a href="https://www.instagram.com/jellyxtreme/">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61551043527964">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

          </div>

          <div className="contacts">

            <div className="contactContainer">
              <p className='contact'>052-6242-225</p>
              <i className="fa-solid fa-phone-flip"></i>
            </div>

            <div className="contactContainer">
              <p className='contact'>jellyyyyyx@gmail.com</p>
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="contactContainer">
              <p className='contact'>סינמה סיטי ירושלים</p>
              <i className="fa-solid fa-location-dot"></i>
            </div>

          </div>

          <div className="socialbottom">

            <a href="https://www.instagram.com/jellyxtreme/">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61551043527964">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}