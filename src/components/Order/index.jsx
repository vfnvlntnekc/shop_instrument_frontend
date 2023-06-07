import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//import AddIcon from '@mui/icons-material/Add';


import styles from './Order.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';

export const Order = ({
    statusId,
    clientId,
    managerId,
    cost,
    products,
    isLoading,
    isEditable,
}) => {
  if (isLoading) {
    return <PostSkeleton />;
  }

  

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: products })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/order/${clientId}/edit`}>
          </Link>
        </div>
      )}
      
    </div>
  );
};