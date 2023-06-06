import Button from "../components/Button.js";
import Container from "../components/Container.js";
import Link from "../components/Link.js";
import InfoBox from "../components/InfoBox.js";

export default function HomePage() {
  return (
    <>
      <Container direction="column">
        <InfoBox title="This is an info" message="Hello World!" />
        <InfoBox title="This is an info" message="Success" variant="success" />
        <InfoBox title="This is an info" message="Error" variant="error" />
      </Container>
      <Container direction="row" wrap="wrap">
        <Button>Click me!</Button>
        <Button color="danger" variant="special">
          Click me!
        </Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
      </Container>
      <Container>
        <p>
          This is a <Link href="/">styled link</Link>.
        </p>
      </Container>
    </>
  );
}
