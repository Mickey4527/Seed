import Router from "next/navigation";

const goLogin = () => {
  Router.push("/login");
}
export default function Home() {
  return goLogin();
}
