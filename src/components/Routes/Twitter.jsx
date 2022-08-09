import React, {useEffect} from 'react';

function Twitter() {
  useEffect(() => {
    window.location.href = 'https://twitter.com/hack4soc';
  }, []);
  return <div></div>;
}

export default Twitter;
