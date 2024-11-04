import { Container } from "@mantine/core";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Container fluid px={0}>
        {children}
    </Container>
  );
}
