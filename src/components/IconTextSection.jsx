import React from "react";
import IconTextCard from "./IconTextCard";

const IconTextSection = () => {
  return (
    <div>
      <IconTextCard
        arr={[
          ["For personnel", "Aalto Handbook", "Safety"],
          [
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/pen.png?h=3ea932e1&itok=5VqIRIDk",
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/folder.png?h=3ea932e1&itok=QvILQcBV",
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/phone.png?h=3ea932e1&itok=ZOqlx9n0",
          ],
          [],
        ]}
      />
    </div>
  );
};

export default IconTextSection;
