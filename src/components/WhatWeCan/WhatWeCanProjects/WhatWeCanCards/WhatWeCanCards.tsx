import React from "react";
import WhatWeCanCardOne from "./WhatWeCanCardOne/WhatWeCanCardOne";
import WhatWeCanCardTwo from "./WhatWeCanCardTwo/WhatWeCanCardTwo";
import WhatWeCanCardThree from "./WhatWeCanCardThree/WhatWeCanCardThree";
import WhatWeCanCardFour from "./WhatWeCanCardFour/WhatWeCanCardFour";
import WhatWeCanCardFive from "./WhatWeCanCardFive/WhatWeCanCardFive";
import WhatWeCanCardSix from "./WhatWeCanCardSix/WhatWeCanCardSix";

export default function WhatWeCanCards() {
  return (
    <div>
      <WhatWeCanCardOne />
      <WhatWeCanCardTwo />
      <WhatWeCanCardThree />
      <div className="flex justify-between pt-32">
        <WhatWeCanCardFive />
        <WhatWeCanCardFour />
      </div>
      <WhatWeCanCardTwo />
      <WhatWeCanCardSix />
    </div>
  );
}
