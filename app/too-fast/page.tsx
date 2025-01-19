import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        🚦 Whoa, Slow Down, Speed Racer! 🏎️
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        It seems you've been clicking like you're training for the Olympics of
        the Internet. 🥇 We love your enthusiasm, but even our servers need aS
        coffee break ☕. Please: Take a deep breath. Grab a snack 🍿. Come back
        in a moment! 🔄 Refreshing this page excessively won't help (our servers
        are not impressed by persistence). Thanks for your patience! 😊
      </p>
    </main>
  );
};

export default page;
