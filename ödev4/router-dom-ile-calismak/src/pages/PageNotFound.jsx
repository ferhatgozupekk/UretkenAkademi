import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404- Sayfa Bulunamadı</h1>
      <Link to="/" className="btn btn-info">
        Anasayfaya Gitmek İçin Tıklayın
      </Link>
    </>
  );
}

export default PageNotFound;
