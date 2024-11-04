import MantineProviderWithSchemeColor from "@/app/MantineProviderSchemeColor";
import '@mantine/core/styles.css';
import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* no effect /> */}
        {/* <ColorSchemeScript defaultColorScheme="auto" /> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body style={{ minHeight: "100vh" }} className={styles.pageWidth}>
        <MantineProviderWithSchemeColor>
          {children}
        </MantineProviderWithSchemeColor>
      </body>
    </html>
  );
}
