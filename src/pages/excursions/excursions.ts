import breadcrumb from '../../components/breadcrumb/breadcrumb';
import breadcrumbsData from '../../components/breadcrumb/breadcrumb.json';

import card from '../../components/card/card';
import cardData from '../../components/card/card.json';

(function () {
  const breadcrumbComponent = document.querySelector('.breadcrumb');
  if (breadcrumbComponent != null) breadcrumb(breadcrumbComponent, breadcrumbsData);

  const cards = document.querySelectorAll('.card');
  Array.from(cards).forEach((element, index) => card(element, cardData[index]));
}());