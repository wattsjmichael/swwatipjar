import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
    It’s been a long time. I miss my restaurant family and since I have been hunkered down studying code, I wanted to help in some way.
Here is my contribution, a place where we can take care of our favorite people in the restaurant world. We all miss you and this is a great way to help each other get through this pandemic. I'm following the examples of Portland, DC, Pittsburgh, and Indianapolis by starting a Virtual Tip Jar 
    </p>
    <p>
    If you'd like to support our Southwest Washington Service Industry workers during these uncertain--and very stressful--times, click <a href="swwatipjar.com/donate/">here</a>. A small contribution can help these folks stay afloat. I know we want to hangout with them right now, but we have to hunker down. Let's all pitch in and take care of our favorite people!
    </p>
    <p>Grateful for your support,</p>
    <p>Michael Watts</p>
    <p>
      <a href="mailto:wattsjmichae@gmail.com">wattsjmichael@gmail.com</a>
    </p>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://ofwemergencyfund.org/">One Fair Wage Emergency Fund</a>
      </li>
      <li>
        <a href=" https://www.restaurantworkerscf.org/news/2020/3/15/restaurant-workers-community-foundation-announces-the-formation-of-restaurant-workers-covid19-crisis-relief-fund">
          Restaurant Workers’ Community Foundation COVID19 Crisis Relief Fund
        </a>
      </li>
      <li>
        <a href="https://www.usbgfoundation.org/beap-application">
          USBG National Charity Foundation
        </a>
      </li>
      <li>
        Food assistance: <a href="https://www.dshs.wa.gov/esa/community-services-offices/state-food-assistance-program-fap">dshs.wa.gov</a> |{" "}
        <a href="https://www.clarkcountyfoodbank.org/">Clark County Food Bank</a>
      </li>
      <li>
        Rent assistance: <a href="https://homeforward.org">Home Forward</a> |{" "}
        <a href="https://caowash.org">Community Action</a>
      </li>
      <li>
        Utility assistance: <a href="https://impactnw.org">Impact NW</a> |{" "}
        <a href="https://humansolutions.org">Human Solutions</a>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;
