import React, { useRef, createFactory } from 'react';

function Page({ children }) {
  const r = useRef();

  return <div ref={r}>{children}</div>
}

function CreateFactoryPage() {
  console.log('----');
  console.log(<Page />);
  console.log(createFactory(Page));
  console.log(createFactory('div'));
  console.log('----');

  return <div>CreateFactoryPage</div>
}

export default CreateFactoryPage;
