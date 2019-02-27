import React from "react";

const ContentA = ({ title, link, description, imageUrl, imageTarget }) => (
  <div className="content-section-a">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-sm-6">
          <hr className="section-heading-spacer" />
          <div className="clearfix" />
          <h2 className="section-heading">
            {title}
            <br />
            <small>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Check on Github
              </a>
            </small>
            <br />
          </h2>
          <p className="lead">{description}</p>
        </div>
        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
          <a href={imageTarget} target="_blank" rel="noopener noreferrer">
            <img className="img-responsive" src={imageUrl} alt={title} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContentA;
