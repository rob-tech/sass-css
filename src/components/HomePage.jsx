import React, { Component } from 'react';


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>

            <div id="cardCont">
              <div className="card-1">
                <a
                  href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
                  className="card"
                >
                  <a
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>International Artist Feature: Malaysia</h1>
                    <span>Mary Winkler</span>
                  </article>
                </a>
              </div>
              <div class="card-1">
                <a
                  href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
                  className="card"
                >
                  <div
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>How to Conduct Remote Usability Testing</h1>
                    <span>Harry Brignull</span>
                  </article>
                </a>
              </div>
              <div className="card-1">
                <a
                  href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
                  className="card"
                >
                  <div
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>Created by You, July Edition</h1>
                    <p>
                      Welcome to our monthly feature of fantastic tutorial results
                      created by you, the Envato Tuts+ community!{" "}
                    </p>
                    <span>Melody Nieves</span>
                  </article>
                </a>
              </div>
              <div className="card-1">
                <a
                  href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826"
                  className="card"
                >
                  <div
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                    <p>
                      We’ll be putting things together so that as you scroll down
                      from the top of the page you’ll see an “Alien Lander” making
                      its way to touch down.
                    </p>
                    <span>Kezz Bracey</span>
                  </article>
                </a>
              </div>
              <div className="card-1">
                <a
                  href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
                  className="card"
                >
                  <div
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>
                      How to Create a “Stranger Things” Text Effect in Adobe
                      Photoshop
                    </h1>
                    <span>Rose</span>
                  </article>
                </a>
              </div>
              <div className="card-1">
                <a
                  href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
                  className="card"
                >
                  <div
                    className="thumb"
                    href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
                  />
                  <article>
                    <h1>
                      5 Inspirational Business Portraits and How to Make Your Own
                    </h1>
                    <span>Marie Gardiner</span>
                  </article>
                </a>
              </div>
            </div>
         
            </>   
         );
    }
}
 
export default HomePage;