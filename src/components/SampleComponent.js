import React from 'react';
import { sampleObjectType } from '../types';

const SampleCompnent = ({ sampleObject }) => {
  const { title, comment, price } = sampleObject;
  return (
    <div>
      {`${title} ${comment} ${price} `}
    </div>
  );
};

SampleCompnent.propTypes = {
  sampleObject: sampleObjectType.isRequired,
};
export default SampleCompnent;
