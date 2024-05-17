import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchChilds } from "../../lib/data";
import { deleteChild } from "../../lib/actions";

const ChildPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, childs } = await fetchChilds(q, page);

  return (
    <div className={styles.container}>
        
        <div>
          {childs.map((child) => (
            <ul key={child.id}>
              <li>{child.name}</li>
              <li>{child.studentID}</li>
              <li>{child.gender}</li>
              <li>{child.age}</li>
              <li>{child.ekibiina}</li>
              <li>{child.nationality}</li>
              <li>{child.parentStatus}</li>
              <li>{child.levelOfNeed}</li>
              <li>{child.yearsLeftToGraduate}</li>
              <li>{child.description}</li>
              <li>{child.createdAt?.toString().slice(4, 16)}</li>
            </ul>
          ))}
        </div>
      <Pagination count={count} />
    </div>
  );
};

export default ChildPage;