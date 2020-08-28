import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userShape } from '../helpers/propTypeShapes';
import { setToken } from '../redux/actions/actionCreators';
import RightNav from './RightNav';

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed:
  top: 15px;
  right: 20px;
  align-self: center;
  display: none;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color:  ${({ open }) => (open ? '#ff751a' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const Hamburger = ({ token, setToken, user }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>

      {
        user
        && (
          <RightNav
            user={user}
            token={token}
            setToken={setToken}
            open={open}
          />
        )
      }
    </>
  );
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
  user: state.authReducer.userProfile,
});

const mapDispatchToProps = dispatch => ({
  setToken: () => dispatch(setToken('')),
});

Hamburger.propTypes = {
  user: PropTypes.objectOf(userShape).isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
