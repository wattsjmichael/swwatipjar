import React, { useState } from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RandomButton from "../components/RandomButton";
import RandomPerson from "../components/RandomPerson";


const Intro = () => (
  <div className="intro">
    <h2>About SW WA Tip jar</h2>
    <p>
      SW WA Tip Jar is an opportunity to share a small act of kindness with our
      Service Industry community during these uncertain times. With a government
      mandate in effect that started all the way back on Tuesday, March 17th, all restaurants and bars were forced to closed.
      We were fortunate and were able to re-open, albeit it wasn't the same. We have guest count caps, cant eat inside, and with
      Winter being here, we are nowhere near the sales we should be at this time. Our friends are hurting right now and the holidays are here. 
      I have had the fortunate ability to learn how to make websites during our lockdown and wanted to help out. So, I am doing what I do best and connecting:
    </p>
    <p>
      The premise is simple: Tip a dollar, $5, $10, $20—or whatever you’d
      like—directly to a Service Industry worker! Tip someone at random or
      browse the <Link to="/donate">full list to find your favorite spots</Link>
      .
    </p>
    <p>
      If you’re a Service Industry worker,{" "}
      <Link to="/signup">fill out the form to receive tips</Link> directly
      through your Cashapp, Venmo, or PayPal.
    </p>
  </div>
);

const Pledge = () => (
  <div className="pledge">
    <h2>Take the pledge!</h2>
    <p>
      Take the pledge to tip every time you make a cocktail at home and think of Amaros', miss going
      out and hanging out at The Grocery, wish you were drinking a latte at Compass, wish you had a wood-fired oven so you could slam a pizza from Dice-K, or demolish that taco from 
      Little Conejo. 
    </p>
    
  </div>
);

const IndexPage = () => {
  const [randomPerson, setRandomPerson] = useState({});

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      {Object.keys(randomPerson).length > 0 && (
        <RandomPerson
          person={randomPerson}
          clearPerson={() => setRandomPerson({})}
          random={true}
        />
      )}
      <RandomButton
        handleClick={setRandomPerson}
        text="Find a random person to tip"
      />
      <nav>
        <Link to="/donate">Browse the full list</Link>
        <Link to="/signup">Sign up to receive tips</Link>
      </nav>
      <Pledge />
    </Layout>
  );
};

export default IndexPage;
