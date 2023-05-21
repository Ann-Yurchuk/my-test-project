import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../utils/Motion';
import Container from '../../components/Container/Container';
import { Box1, Btn, LinkNav } from './HomePage.styled';

export const Home = () => {
  const location = useLocation();
  const openLinkHref = location.state?.from ?? '/tweets';

  return (
    <Container>
      <Box1>
        <AnimatePresence>
          <motion.h1
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
            style={{
              color: '#EBD8FF',
              fontSize: '42px',
            }}
          >
            Test Aplication Tweets
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
            style={{
              color: '#EBD8FF',
              fontSize: '40px',
            }}
          >
            Welcome!
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
            style={{
              color: '#EBD8FF',
              fontSize: '35px',
            }}
          >
            We are glad to see you!
          </motion.p>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            style={{
              color: '#EBD8FF',
              fontSize: '30px',
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Click on this link and start!
          </motion.p>
        </AnimatePresence>
        <Btn type="button">
          <LinkNav to={openLinkHref} replace={true}>
            Click me now
          </LinkNav>
        </Btn>
      </Box1>
    </Container>
  );
};
