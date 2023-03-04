import React from "react";

type Props = {};

const Promos = (props: Props) => {
  return (
    <section className="my-20 py-20 md:px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movies & Watch Offline. <br/> Enjoy On Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...</p>
        </div>
      </div>
    </section>
  );
};

export default Promos;
