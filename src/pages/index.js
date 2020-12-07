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
      SW WA Tip Jar is an opportunity to share an act of kindness with local Service Industry crews during these uncertain times.
      Since March, restaurants and bars were forced to closed, then reopen with plenty of restrictions in place. Sales and available work hours are limited and our friends are hurting right now.
      I had the opportunity to learn how to create websites during lockdown and wanted to help out. So, I am doing what I do best and connecting.
    </p>
    <h3>It's Simple!</h3>
    <p>
      Tip $1, $5, $10, $20 —whatever you’d like— directly to your favorite Service Industry workers! Send a <Link to="/donate">tip now</Link>.
Don’t worry, we’re not all good with names. Tip someone at random or browse the full list to find your favorite spots.
If you’re a Service Industry worker, fill out the form to receive tips directly through your Cashapp, Venmo, or PayPal. Front and Back of House welcome. And as a friendly reminder, all the answers to the questions are public-facing. Be cool.
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
      <h3>Take the pledge to tip every time you pour your drink at home and find yourself…</h3>
      <p>pretending you’re fireside at <a href="https://www.amarostable.com/order-now">Amaros'</a>,</p> 
      <p>missing Salty Makers at <a href="http://www.thegrocerycocktailsocial.com/menu#food">The Grocery</a>,</p> 
      <p>longing for a latte from <a href="http://www.compasscoffeeroasting.com/shop"> Compass</a>,</p>  
      <p>dreaming of pizza from <a href="https://lasorrentinavw.com/menu/"> La Sorrentina</a>,</p> 
      <p>drooling over thoughts of <a href="https://www.littleconejoonline.com/"> Little Conejo</a>,</p> 
      <p>or swooning over an IPA from <a href="https://bcbonline.square.site/">Brother's Cascadia</a>.</p> </p>
      <strong>And keep supporting local business</strong>
    

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
