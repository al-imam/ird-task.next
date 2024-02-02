import { getNav } from "$lib";
import { DesktopTopNav } from "./desktop-top-nav";

interface DesktopTopNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export async function Nav(props: DesktopTopNavProps) {
  const data = await getNav();
  return <DesktopTopNav navigation={data} {...props} />;
}
