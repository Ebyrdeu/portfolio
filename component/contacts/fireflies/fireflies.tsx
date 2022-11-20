import classes from "../../../styles/firefly.module.css";

const Fireflies = () => {

  const fireflies = [...Array(11)].map((_, i) =>  <div key={i} className={classes.firefly}/>);

  return (
      <div>
        {fireflies}
      </div>
  );
};

export default Fireflies;