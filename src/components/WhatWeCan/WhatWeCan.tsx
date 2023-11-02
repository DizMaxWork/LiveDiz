import React from "react";
import WhatWeCanList from "./WhatWeCanList/WhatWeCanList";
import WhatWeCanProjects from "./WhatWeCanProjects/WhatWeCanProjects";

export default function WhatWeCan() {
  return (
    <section className="pt-96">
      <h2 className=" text-8xl">Что мы умеем</h2>
      <WhatWeCanList />
      <WhatWeCanProjects />
      <div className="pt-32">
        <h4 className="text-3xl">Смотреть еще</h4>
      </div>
    </section>
  );
}
