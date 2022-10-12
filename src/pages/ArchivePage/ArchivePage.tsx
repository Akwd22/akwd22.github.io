import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import "./ArchivePage.css";

const ArchivePage: FunctionComponent = () => {
  return (
    <>
      <Outlet />
      <main id="archive-page">
        <h1>Page des archives (en construction).</h1>
      </main>
    </>
  );
};

export default ArchivePage;
