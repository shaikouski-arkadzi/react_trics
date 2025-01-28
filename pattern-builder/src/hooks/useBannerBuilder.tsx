import { useRef } from "react";
import { BannerProps } from "../types/BannerPops";
import Banner from "../components/Banner";

type BannerBuilder = {
  setTitle: (title: string) => BannerBuilder;
  setPrice: (title: string) => BannerBuilder;
  setButton: (text: string) => BannerBuilder;
  setOnClick: (onClick: () => void) => BannerBuilder;
  build: () => React.ReactElement;
  clearRefs: () => void;
};

export const useBannerBuilder = () => {
  const props = useRef<BannerProps>({} as BannerProps);

  const validateTitle = (title: string) => {
    if (title.length > 50) {
      throw new Error("Title is too long");
    }
    return title;
  };

  const formatPrice = (price: string) => {
    return `$${parseFloat(price).toFixed(2)}`;
  };

  const builder: BannerBuilder = {
    setTitle: (title: string) => {
      props.current.title = validateTitle(title);
      return builder;
    },
    setPrice: (price: string) => {
      props.current.price = formatPrice(price);
      return builder;
    },
    setButton: (text: string) => {
      props.current.text = text;
      return builder;
    },
    setOnClick: (onClick: () => void) => {
      props.current.onClick = onClick;
      return builder;
    },
    build: () => <Banner {...props.current} />,
    clearRefs: () => {
      props.current = {} as BannerProps;
    },
  };

  return builder;
};
