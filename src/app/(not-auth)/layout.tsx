import NotAuthFooter from "@/layout/not-auth/not-auth-footer";
import { NotAuthHeader } from "../../layout/not-auth/not-auth-header";

export default function NotAuthLayout(props: LayoutProps<"/">) {
  return (
    <>
      <NotAuthHeader />
      <main className="container mx-auto px-4 py-8">{props.children}</main>
      <NotAuthFooter />
    </>
  );
}
