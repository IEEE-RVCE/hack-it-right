//@ts-check
import {XTerm} from 'xterm-for-react';

function Term() {
  return (
    <div
      style={{
        overflow: 'hidden'
      }}
    >
      <XTerm
        options={{
          theme: {
            background: '#121930'
          }
        }}
        onResize={(cols, rows) => {
          console.log(cols, rows);
        }}
      />
    </div>
  );
}

export {Term};
