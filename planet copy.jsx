import { useState } from 'react';
import { contentMap } from './src/data';

const Planet = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <div>
      <h2 onClick={() => handleHeadingClick('earth')}>Earth</h2>
      <h2 onClick={() => handleHeadingClick('mars')}>Mars</h2>
      <h2 onClick={() => handleHeadingClick('Heading 3')}>Heading 3</h2>

      {selectedHeading && (
        <div>
          {/* <h3>{contentMap[selectedHeading][name]}</h3> */}
          <p>{contentMap[selectedHeading].name}</p>
          <p>{contentMap[selectedHeading].overview}</p>
        </div>
      )}
    </div>
  );
};

export default Planet;
