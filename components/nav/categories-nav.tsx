import { getNav } from "$lib";
import { Categories } from "./categories";

interface CategoriesNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export async function CategoriesNav(props: CategoriesNavProps) {
  const data = await getNav();
  return <Categories navigation={data} {...props} />;
}
