import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//import AddIcon from '@mui/icons-material/Add';


import styles from './Instrument.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';

export const Instrument = ({
  id,
  fullName,
  createdAt,
  category,
  description,
  price,
  quality,
  children,
  isFullInstrument,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <PostSkeleton />;
  }

  

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullInstrument })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/instrument/${id}/edit`}>
          </Link>
        </div>
      )}
      

      <div className={styles.wrapper}>
        <UserInfo additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 className={clsx(styles.fullName, { [styles.fullName]: isFullInstrument })}>
            {isFullInstrument ? fullName : 
            <Link to={`/instrument/${id}`}>{fullName} 
            
            </Link>}
            
          </h2>

          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <span>{category}</span>
            </li>
            <li>
              <span>{description}</span>
            </li>
            <li>
              <span>{price}</span>
            </li>
            <li>
              <span>{quality}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};