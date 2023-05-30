import ListIcon from "../../public/assets/images/icon-list.svg";

export function List() {
  return (
    <ul className="details__list | content-flow">
      <li className="flex">
        <img src={ListIcon} alt="" />
        <span>Product discovery and building what matters</span>
      </li>
      <li className="flex">
        <img src={ListIcon} alt="" />
        <span>Measuring to ensure updates are a success</span>
      </li>
      <li className="flex">
        <img src={ListIcon} alt="" />
        <span>And much more!</span>
      </li>
    </ul>
  );
}
