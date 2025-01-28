import { useBannerBuilder } from "./hooks/useBannerBuilder";

function App() {
  const onClick = () => {
    console.log("click");
  };

  const bannerBuilder = useBannerBuilder()
    .setTitle("Title")
    .setPrice("9.99")
    .setButton("View")
    .setOnClick(onClick);

  const Banner = bannerBuilder.build();
  // Очищаем при перерисовке данные в ref
  // Чтоб не задваивалось
  bannerBuilder.clearRefs();

  return <>{Banner}</>;
}

export default App;
