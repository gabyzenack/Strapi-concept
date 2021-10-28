import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/holos_consulting.png';

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme.main.colors.leftMenu['background-header-link']};
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: 5.5rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-position: center;
    background-size: contain;
    padding: 0.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
