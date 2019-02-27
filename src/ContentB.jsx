import React from "react";

const ContentB = ({ title, link, description, imageUrl, imageTarget }) => (
  <div class="content-section-b">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
          <hr class="section-heading-spacer" />
          <div class="clearfix" />
          <h2 class="section-heading">
            {title}
            <br />
            <small>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Check on Github
              </a>
            </small>
            <br />
          </h2>
          <p class="lead">{description}</p>
        </div>
        <div class="col-lg-5 col-sm-pull-6  col-sm-6">
          <a href={imageTarget} target="_blank" rel="noopener noreferrer">
            <img class="img-responsive" src={imageUrl} alt={title} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContentB;
