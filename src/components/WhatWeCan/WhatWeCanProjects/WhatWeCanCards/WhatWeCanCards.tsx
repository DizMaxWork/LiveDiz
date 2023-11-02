import React from "react";
import WhatWeCanCardOne from "./WhatWeCanCardOne/WhatWeCanCardOne";
import WhatWeCanCardTwo from "./WhatWeCanCardTwo/WhatWeCanCardTwo";
import WhatWeCanCardThree from "./WhatWeCanCardThree/WhatWeCanCardThree";
import WhatWeCanCardFour from "./WhatWeCanCardFour/WhatWeCanCardFour";
import WhatWeCanCardSix from "./WhatWeCanCardSix/WhatWeCanCardSix";

export default function WhatWeCanCards() {
  return (
    <div>
      <WhatWeCanCardOne />
      <WhatWeCanCardTwo />
      <div className="w-fit ml-auto -mt-80">
        <WhatWeCanCardThree />
      </div>
      <div className="flex justify-between pt-32">
        <WhatWeCanCardThree />
        <WhatWeCanCardFour />
      </div>
      <WhatWeCanCardTwo />
      <WhatWeCanCardSix />
    </div>
  );
}
