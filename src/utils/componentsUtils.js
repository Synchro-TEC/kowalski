import React from 'react';
import AreaTitle from '../components/ui/areaTitle';

class componentsUtils {
  static generateColapsableTitle(title, direction) {
    const directionClass = direction !== 'closed' ? 'fa-angle-double-up' : 'fa-angle-double-down';
    return (
      <AreaTitle>
        {title}
        <i className={`fa fa-fw ${directionClass} sv-pull-right`} />
      </AreaTitle>
    );
  }

  static generateInnerColapsableTitle(title, direction) {
    const directionClass = direction !== 'closed' ? 'fa-angle-double-up' : 'fa-angle-double-down';
    return (
      <div className="sv-bg-color--steel-100 sv-pointer sv-pa--5 sv-mb--5">
        {title}
        <i className={`fa fa-fw ${directionClass} sv-pull-right`} style={{ marginTop: '3px' }} />
      </div>
    );
  }
}

export default componentsUtils;
