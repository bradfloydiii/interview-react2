import React from 'react';
import { ActivityLogItem } from '../ActivityLogItem';

import './ActivityLog.css';

export const ActivityLog = props => {
  return (
    <div>
      {props.activities.length <= 0 && <div className="header">No tracked tasks</div>}

      {props.activities.length > 0 && (
        <div>
          <div className='header mt-3 mb-2'>Activity Log</div>
          <div className='log-container mb-2'>
            <div className='row'>
              <div className='col col-header'>Start</div>
              <div className='col col-header'>End</div>
              <div className='col col-header'>Duration</div>
              <div className='col col-header'>Description</div>
            </div>
            {props.activities.map((activity, index) => {
              return <ActivityLogItem key={index} activity={activity} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
