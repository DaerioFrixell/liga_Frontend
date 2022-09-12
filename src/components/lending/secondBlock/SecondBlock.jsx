import React from 'react';
import './SecondBlock.css';

function SecondBlock() {
  return (
    <section className="section-video">

      <h2 className="checkMe">Посмотри каких результатов ты можешь достигнуть</h2>
      <div className="video">
        <div className="video-prev">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cZvikA5-4J8" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="video-next">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/z5Cj419Z4to" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>

    </section>
  );
}

export default SecondBlock;