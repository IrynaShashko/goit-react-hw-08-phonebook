import PropTypes from 'prop-types';

import styles from './container.module.css';

const Container = ({ name, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};
