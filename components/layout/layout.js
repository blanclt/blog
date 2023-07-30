import Header from "../header/header";
function Layout(props) {
  return (
    <main>
      <Header />
      <section>{props.children}</section>
    </main>
  );
}

export default Layout;
