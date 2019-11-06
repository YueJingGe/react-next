// 导入Snipcart 允许在<head>元素内添加HTML
import Head from "next/head";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { IProduct } from "../components/Product";
import Footer from "../components/Footer";
import "./index.scss";

interface IIndexProps {
  products: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="[YOUR-API-KEY]"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  );
};

/**
 * 提取数据并导入组件
 */
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: "1",
        name: "安徒生童话",
        price: 25.0,
        image: "https://s2.ax1x.com/2019/11/01/K7jOHg.jpg",
        description:
          "卖火柴的小女孩，丑小鸭变成白天鹅，皇帝的新装，拇指姑娘，海的女儿"
      } as IProduct
    ]
  };
};

export default Index;
