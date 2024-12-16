import { Frame, Screen, TopBar, BottomBar, Content } from "./components";

export default function MobileCard({ name, text }) {
  return (
    <Frame>
      <Screen>
        <TopBar />
        <Content name={name} text={text} />
        <BottomBar />
      </Screen>
    </Frame>
  );
}
