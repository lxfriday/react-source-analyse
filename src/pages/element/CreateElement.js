import React, { useRef } from 'react';

function Page({ children }) {
  const r = useRef();

  return <div ref={r}>{children}</div>
}


function CreateElementPage() {
  console.log(<Page name="lxfriday" key="1"><span>this is children</span></Page>);
  return <Page name="lxfriday" key="1"><span>this is children</span><span>this is children</span><span>this is children</span></Page>
}

export default CreateElementPage;
