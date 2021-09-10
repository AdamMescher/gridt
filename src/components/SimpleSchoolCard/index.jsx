const SimpleSchoolCard = ({ school }) => (
  <li onClick={() => console.log({ school })}>
    <div>
      <p>{school.SCH_NAME}</p>
    </div>
  </li>
);

export default SimpleSchoolCard;
