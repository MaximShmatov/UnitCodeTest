import './img/card-airshow.jpg';
import './img/card-elevate.jpg';
import './img/card-lorem.jpg';
import './img/card-regatta.jpg';
import './img/card-silverstone.jpg';
import './img/card-wimbledon.jpg';

function card(element: Element, data: TCard) {
  const img = element.querySelector('.card__img');
  const title = element.querySelector('.card__title');
  const details = element.querySelectorAll('.card__description');

  if (details != null) {
    const [detailFirst, detailSecond] = Array.from(details);
    detailFirst.textContent = data.detailFirst;
    detailSecond.textContent = data.detailSecond;
  }

  if (img != null) {
    img.setAttribute('alt', data.alt);
    img.setAttribute('src', data.src);
  }

  if (title != null) title.textContent = data.title;
}

export default card;