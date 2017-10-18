import React from 'react';

const NoSuchRoute = ({ location }) => (
  <div className='ui red raised padded text container segment'>
    <b>No such path exists:</b>
    <div className='ui black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);

export default NoSuchRoute;