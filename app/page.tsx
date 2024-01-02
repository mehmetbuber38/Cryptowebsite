import React from "react";
import { Footer, Header } from "./layouts";
import Image from "next/image";
import {
  Hero,
  Subtitle,
  Featured,
  Analytics,
  Application,
  Access,
  Testimonial,
  Ready,
} from "./components";
import "./main.scss";

const footerData = [
  {
    home: ["About", "Buy NFTs", "Sell NFTs"],
  },

  {
    market: ["Browse NFTs", "Buy NFTs", "Sell NFTs"],
  },

  {
    contact: ["Email", "LinkedIn", "Twitter", "Instagram"],
  },
];

function page() {
  return (
    <>
      <Header />
      <main className="">
        <section className="section-hero">
          <Hero
            title="discover and collect rare NFTs"
            description="The most secure marketplace for buying and selling unique crypto assets."
            buttonText="BUY NFTS"
          />
        </section>

        <section className="section-featured">
          <Subtitle title="Featured on" />
          <Featured />
        </section>

        <section className="section-analytics">
          <Subtitle title="Analytics" />
          <Analytics
            url="/analytics.png"
            title="built-in analytics to track your nfts"
            description="Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
            buttonText="view our pricing"
          />
        </section>

        <section className="section-application">
          <Subtitle title="Get Our App" />
          <Application
            url1="/app-1.png"
            title="browse nfts from your smartphone"
            description="browse nfts from your smartphone"
            buttonText="Download on ıos"
            url2="/app-2.png"
          />
        </section>

        <section className="section-access">
          <Subtitle title="7/24 Access" />
          <Access
            title="sell your NFTs from anywhere at any time"
            description="With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
            buttonText="Get Started"
          />
        </section>

        <section className="section-testimonial">
          <Subtitle title="Testimonial" />
          {/* <h1>Read what others have to say</h1> */}
          <section className="section-testimonial__body">
            <Testimonial
              url="/olivia-cole.png"
              title="Olivia Cole"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            />
            <Testimonial
              url="/ewan-white.png"
              title="Evan White"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            />
            <Testimonial
              url="/jessica-page.png"
              title="Jessica Page"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
            />
          </section>
        </section>

        <section className="section-ready">
          <Ready
            title1="are you ready?"
            title2="be a part of the next big thing"
            buttonText="Get Started"
          />
        </section>
      </main>

      <footer>
        <Footer
          homeTitle="Home"
          home={footerData[0].home} // footerHomeData'dan gelen veriyi home prop'u olarak geçir
          marketTitle="Market"
          market={footerData[1].market}
          contactTitle="Contact"
          contact={footerData[2].contact}
          newsletterTitle="join our newsletter"
          submitButtonText="Submit"
        />
      </footer>
    </>
  );
}

export default page;
