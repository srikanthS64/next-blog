import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/pagination"
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <CardList />
    <Pagination />
    <Menu />
  </div>;
}
