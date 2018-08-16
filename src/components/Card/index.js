import React from 'react';

const Card = ({name, show, title, children}) => {
  const cardClass = show
    ? 'collapse show'
    : 'collapse';
  return (
    <div className="card text-center">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link btn-pricing "
            data-toggle="collapse"
            data-target={`#${name}`}
            aria-expanded="true"
            aria-controls={name}>
            {title}
          </button>
        </h5>
      </div>
      <div
        id={name}
        className={cardClass}
        aria-labelledby="headingOne"
        data-parent="#accordion">
        <div className="card-body row">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;