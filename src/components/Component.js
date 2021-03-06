import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: lightcyan;
`;

const Comp = ({value}) => <Wrapper>{value}</Wrapper>;

Comp.propTypes = {
  value: PropTypes.string,
};

export default Comp;
