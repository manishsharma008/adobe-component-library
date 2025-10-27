/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Simple SD Text React component for AEM SPA Editor
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React from 'react';
import './SdText.css';

export default function SdText(props) {
  const { title, description } = props || {};
  if (!title && !description) {
    return null;
  }
  return (
    <div className="cmp-sd-text">
      {title ? <h3 className="cmp-sd-text__title">{title}</h3> : null}
      {description ? (
        <p className="cmp-sd-text__description">{description}</p>
      ) : null}
    </div>
  );
}

