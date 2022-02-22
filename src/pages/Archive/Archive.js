import React from 'react';
import ArchiveBody from '../../components/ArchiveBody/ArchiveBody.js';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArchiveHeader from "../../img/archive-header.svg";

function Archive() {
  return (
    <div className= "archive"> 
        <PageHeader 
          header="ACM Archive"
          subheader="A list of the previous workshops given by ACM!"
          img={ArchiveHeader}
          imgStyle={{
            backgroundSize: "423px 297px",
            backgroundPosition: "100%",
          }}
        />
        <ArchiveBody />
    </div>
    );
}

export default Archive;
