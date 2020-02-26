import React, { Component } from "react";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="cardCont">
              <div id="displayCards">
                <ul className="card">
                  <li className="card__image">
                    <img src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg?itok=Snv4I36d" alt="img"/>
                  </li>
                  <li className="card__content">
                      <div className="card__title">Card Title</div>
                    <b>
                      <p className="card__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore libero facere quos aspernatur assumenda. Impedit cupiditate, non aut saepe ratione sed dignissimos consequuntur? Dignissimos dicta sequi corporis enim asperiores. </p>{" "}
                    </b>
                  </li>
                </ul>
         

                <ul className="card">
                  <li className="card__image">
                    <img src="https://cdn.mos.cms.futurecdn.net/MbKXuF2uEgsWHX5c6MkCvY-320-80.jpg" alt="img"/>
                  </li>
                  <li className="card__content">
                      <div className="card__title">Card Title</div>
                    <b>
                      <p className="card__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore libero facere quos aspernatur assumenda. Impedit cupiditate, non aut saepe ratione sed dignissimos consequuntur? Dignissimos dicta sequi corporis enim asperiores. </p>{" "}
                    </b>
                  </li>
                </ul>
                <ul className="card">
                  <li className="card__image">
                    <img src="http://yeahstockphotos.com/wp-content/uploads/original/2016_05/free-stock-photos-high-resolution-download090.jpg" alt="img"/>
                  </li>
                  <li className="card__content">
                      <div className="card__title">Card Title</div>
                    <b>
                      <p className="card__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore libero facere quos aspernatur assumenda. Impedit cupiditate, non aut saepe ratione sed dignissimos consequuntur? Dignissimos dicta sequi corporis enim asperiores. </p>{" "}
                    </b>
                  </li>
                </ul>
                <ul className="card">
                  <li className="card__image">
                    <img src="https://codeshare.co.uk/media/1068/search-best-free-stock-images-one-place.jpg?width=1910&height=1000&mode=crop&anchor=center" alt="img"/>
                  </li>
                  <li className="card__content">
                      <div className="card__title">Card Title</div>
                    <b>
                      <p className="card__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore libero facere quos aspernatur assumenda. Impedit cupiditate, non aut saepe ratione sed dignissimos consequuntur? Dignissimos dicta sequi corporis enim asperiores. </p>{" "}
                    </b>
                  </li>
                </ul>
                </div>
            </div>
        
    
      </>
    );
  }
}

export default HomePage;
