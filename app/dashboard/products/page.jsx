import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchChilds } from "../../lib/data";
import { deleteChild } from "../../lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, childs } = await fetchChilds(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a child..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
            <td style="width: 100px; text-align: center;">Name</td>
            <td style="width: 100px; text-align: center;">StudentID</td>
            <td style="width: 100px; text-align: center;">Gender</td>
            <td style="width: 100px; text-align: center;">Age</td>
            <td style="width: 100px; text-align: center;">Class</td>
            <td style="width: 100px; text-align: center;">Nationality</td>
            <td style="width: 150px; text-align: center;">Parent Status</td>
            <td style="width: 150px; text-align: center;">Level Of Need</td>
            <td style="width: 100px; text-align: center;">Years Left</td>
            <td style="width: 300px; text-align: center;">Description</td>
            <td style="width: 150px; text-align: center;">Date Added</td>
            <td style="width: 150px; text-align: center;">Action</td>
        </tr>
        </thead>
        <tbody>
          {childs.map((child) => (
            <tr key={child.id}>
              {/* <td>
                <div className={styles.product}>
                  <Image
                    src={child.image || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {child.title}
                </div>
              </td> */}
              <td>{child.name}</td>
              <td>{child.studentID}</td>
              <td>{child.gender}</td>
              <td>{child.age}</td>
              <td>{child.ekibiina}</td>
              <td>{child.nationality}</td>
              <td>{child.parentStatus}</td>
              <td>{child.levelOfNeed}</td>
              <td>{child.yearsLeftToGraduate}</td>
              <td>{child.description}</td>
              <td>{child.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${child.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteChild}>
                    <input type="hidden" name="id" value={child.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;