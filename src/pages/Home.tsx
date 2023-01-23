import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Home() {
  return (
    <LandingLayout>
      <React.Fragment>
        <Hero
          title="Bringing people together, one conversation at a time."
          subtitle="Revolutionize the way you communicate with our user-friendly chat app."
          image="https://source.unsplash.com/collection/404339/800x600"
          ctaText="Create your account now"
          ctaLink="/signup"
        />
      </React.Fragment>
    </LandingLayout>
  );
}
