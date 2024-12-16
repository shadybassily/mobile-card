import { Frame, Screen, TopBar, BottomBar, Content } from "./components";

export default function MobileCard() {
  return (
    <Frame>
      <Screen>
        <TopBar />
        <Content />
        <BottomBar />
      </Screen>
    </Frame>
  );
}
