import { BannerProps } from "../types/BannerPops";

const Banner = ({ title, text, price, onClick }: BannerProps) => {
  return (
    <section>
      {title ? <h3>{title}</h3> : null}
      {price ? <h3>{price}</h3> : null}
      {text ? <button onClick={onClick}>{text}</button> : null}
    </section>
  );
};

export default Banner;
