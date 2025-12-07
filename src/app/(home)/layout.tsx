
"use client";
import { Button, Group } from "@mantine/core";

export default function HomeSubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Group>
      <Button onClick={() => window.location.href = "/"}>Home</Button>
      <Button onClick={() => window.location.href = "/user"}>User</Button>
      <Button onClick={() => window.location.href = "/people"}>People</Button>
      <Button onClick={() => window.location.href = "/animation"}>Animation</Button>
      {children}
    </Group>
  );
}

