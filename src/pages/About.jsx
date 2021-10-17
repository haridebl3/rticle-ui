import React from "react";
import Navbar from "../components/Navbar";
import AboutUsTemplate from "../components/AboutUsTemplate";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            rticle is a ambitious blog website that was launched in 2021 by two friends with the goal of examining how blogs will impact living in the future for a broad audience.
            We believe that we now live in a brilliant world of devices, which has ushered in digital revolutions.
          </p>
        </div>

        <AboutUsTemplate
          titlename="HariHaran | Founder"
          name="Hari"
          post="Developer"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit quisquam possimus ut rem temporibus esse velit blanditiis, deserunt, cum, eum fuga laborum obcaecati."
          image="https://dummyimage.com/600x500/d9ccd9/ffffff"
          facebook=""
          twitter=""
          linkedin=""
          github=""
        />
        <AboutUsTemplate
          titlename="Muzaffar Pasha | Founder"
          name="Pasha"
          post="Developer"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit quisquam possimus ut rem temporibus esse velit blanditiis, deserunt, cum, eum fuga laborum obcaecati."
          image="https://dummyimage.com/600x500/d9ccd9/ffffff"
          facebook=""
          twitter=""
          linkedin=""
          github=""
        />
      </section>
    </div>
  );
}
