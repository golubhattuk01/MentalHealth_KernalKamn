import React from "react";

import Content from "./Accoridion";

const AccordComponent = () => {
  return (
    <div className="p-8">
      <Content
        title="Accordion 1"
        content="This is the content for Accordion 1."
      />
      <Content
        title="Accordion 2"
        content="This is the content for Accordion 2."
      />
      <Content
        title="Accordion 3"
        content="This is the content for Accordion 3."
      />
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click
        </button>
      </div>
    </div>
  );
};

export default AccordComponent;
