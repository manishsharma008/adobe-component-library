/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Simple SD Text React component for AEM SPA Editor (TypeScript)
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React from 'react';
import './SdText.css';

export type SdTextProps = {
  title?: string;
  description?: string;
};

export default function SdText(props: SdTextProps): any {
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

