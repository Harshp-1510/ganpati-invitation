"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = async () => {
    // Start music when user taps Tap to Open
    const audio = audioRef.current;

    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (error) {
        console.error("Music could not start:", error);
      }
    }

    // Opening animation
    setClosing(true);

    setTimeout(() => {
      setOpened(true);
    }, 700);
  };

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=6246%2B8J8%2C%20Aparnaraj%20CHS%2C%20Gholai%20Nagar%2C%20Kalwa%2C%20Thane%2C%20Maharashtra%20400605%2C%20India",
      "_blank"
    );
  };

  return (
    <main className="ganpati-page">

      {/* =================================================
          BACKGROUND MUSIC
          Starts automatically after Tap to Open
          and continues forever
      ================================================= */}

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/ganpati-music.mp3"
          type="audio/mpeg"
        />
      </audio>


      {/* =================================================
          FIRST SCREEN - TAP TO OPEN
      ================================================= */}

      {!opened && (
        <section
          className={`opening-screen ${
            closing ? "opening-close" : ""
          }`}
        >
          <div className="opening-content">

            <div className="opening-om">
              ॐ
            </div>

            <div className="gold-divider">
              <span>◆</span>
            </div>

            <button
              className="tap-button"
              onClick={handleOpen}
              aria-label="आमंत्रण उघडा"
            >
              <div className="opening-circle">
                ॥ श्री गणेशाय नमः ॥
              </div>
            </button>

            <div className="gold-divider">
              <span>◆</span>
            </div>

          </div>
        </section>
      )}


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      {opened && (
        <div className="main-content">


          {/* =================================================
              HEADER
          ================================================= */}

          <header className="top-header">

            <div className="ganesh-symbol">
              ॐ
            </div>

            <div className="ganesh-mantra">
              ॥ श्री गणेशाय नमः ॥
            </div>

          </header>


          {/* =================================================
              HERO
          ================================================= */}

          <section className="hero">

            <p className="welcome-text">
              आमच्या घरी यावर्षी
            </p>

            <h1 className="main-title">

              <span>
                बाप्पाचे
              </span>

              <span>
                आगमन
              </span>

            </h1>

            <div className="ganpati-container">

              <div className="arch-border">

                <img
                  src="/bappa.png"
                  alt="गणपती बाप्पा"
                  className="ganpati-image"
                />

              </div>

            </div>

          </section>


          {/* =================================================
              INVITATION INTRO
          ================================================= */}

          <section className="invitation-intro">

            <div className="gold-divider">
              <span>◆</span>
            </div>

            <h2>
              माने परिवाराकडून
            </h2>

            <p className="small-invite">
              सस्नेह आमंत्रण
            </p>

            <div className="gold-divider">
              <span>◆</span>
            </div>

            <div className="main-invitation">

              <h1>
                सस्नेह आमंत्रण
              </h1>

              <div className="gold-divider">
                <span>◆</span>
              </div>

              <p>
                गणरायाच्या आगमनाच्या या मंगल क्षणी आपण सर्वांनी
                उपस्थित राहून उत्सवाची शोभा वाढवावी.
              </p>

              <div className="gold-divider">
                <span>◆</span>
              </div>

            </div>

          </section>


          {/* =================================================
              FESTIVAL
          ================================================= */}

          <section className="festival-section">

            <h2 className="festival-title">
              गणेश उत्सव
            </h2>

            <div className="gold-divider">
              <span>◆</span>
            </div>


            {/* स्थापना */}

            <div className="info-card">

              <p className="card-label">
                स्थापना
              </p>

              <h3>
                सोमवार, १४ सप्टेंबर २०२६
              </h3>

            </div>


            {/* माहिती */}

            <div className="text-card">

              <p>
                यावर्षी आमच्या घरी १४ सप्टेंबर २०२६ रोजी
                गणरायाची स्थापना होणार आहे. बाप्पाचा मुक्काम
                ७ दिवसांचा असणार आहे.
              </p>

              <p>
                या मंगल प्रसंगी आपण सर्वांनी सहकुटुंब उपस्थित
                राहून बाप्पाचे आशीर्वाद घ्यावेत,
                ही नम्र विनंती.
              </p>

            </div>

          </section>


          {/* =================================================
              LOCATION
          ================================================= */}

          <section className="location-section">

            <h2 className="location-title">
              ठिकाण
            </h2>

            <div className="location-divider">
              <span>◆</span>
            </div>


            {/* MAP */}

            <div className="map-container">

              <iframe
                title="गणपती उत्सवाचे ठिकाण"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.992%2C19.190%2C73.012%2C19.210&layer=mapnik"
                loading="lazy"
              />

            </div>


            {/* ADDRESS */}

            <div className="location-card">

              <h3>
                माने परिवार
              </h3>

              <p className="address">
                A5-304, अपर्णाराज सोसायटी, घोलाई नगर,
                <br />
                कळवा, ठाणे, ४००६०५
              </p>

              <button
                className="maps-button"
                type="button"
                onClick={openMaps}
              >
                Open Maps
              </button>

              <p className="location-footer">
                बाप्पाच्या दर्शनासाठी अवश्य या...🙏
              </p>

            </div>

          </section>


          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="footer">

            <div className="gold-divider">
              <span>◆</span>
            </div>

            <p className="footer-main">
              आपली उपस्थिती हेच आमच्यासाठी बाप्पाचे आशीर्वाद आहेत.
            </p>

          </footer>


        </div>
      )}

    </main>
  );
}