import {
  shape, number, string,
} from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const sampleObjectType = shape({
  price: number,
  title: string,
  comment: string.isRequired,
});
