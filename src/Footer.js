import React from 'react';

const defaultFooter = <span className='ssc-copyright'>&copy; 2015 State Street Corporation</span>;

export default ({children = defaultFooter}) => {
  return <footer className='footer text-muted'>{children}</footer>;
};
