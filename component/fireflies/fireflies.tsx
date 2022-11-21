import useFireFlyStyles from "./styles/firefly";

const Fireflies = () => {
  const {classes} = useFireFlyStyles();
  const fireflies = [...Array(10)].map((_, i) => <div key={i} className={classes.firefly}/>);

  return (
      <div>
        {fireflies}
      </div>
  );
};

export default Fireflies;