import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 100, y: 100 },
  },
];

const root = createRoot(document.getElementById('root'));
root.render(
  <ReactFlow defaultNodes={nodes}>
    <Background />
  </ReactFlow>
);
