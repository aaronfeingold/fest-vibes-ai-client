import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardTile.module.css';

const DashboardTile = ({ title, children, actions }) => {
  return (
    <div className={`card ${styles.dashboardTile}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">{title}</h5>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

DashboardTile.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
};

export default DashboardTile;
