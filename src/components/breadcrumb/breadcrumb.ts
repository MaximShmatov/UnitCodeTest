const reducer = (acc: string, current: TBreadcrumb) => {
  return (`
    ${acc} 
    <li class="breadcrumb__item"> 
        <a class="breadcrumb__item-ref" href="${current.href}">${current.value}</a>
    </li>
  `);
};

function breadcrumb(element: Element, data: TBreadcrumb[]) {
  const items = data.reduce(reducer, '');
  element.innerHTML = items;
}

export default breadcrumb;