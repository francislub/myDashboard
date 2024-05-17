import { addChild } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";
import UploadForm from '../../../../components/UploadForm';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addChild} className={styles.form}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Student ID" name="studentID" required />
        <select name="gender" id="cat">
          <option value="general">Choose gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" placeholder="Age" name="age" required />
        <input type="text" placeholder="Class" name="ekibiina" required />
        <input type="text" placeholder="Nationality" name="nationality" />
        <select name="parentStatus" id="status">
          <option value="general">Choose Parent Status</option>
          <option value="male">Both Alive</option>
          <option value="female">Both Deceased</option>
          <option value="female">One Alive</option>
        </select>
        <select name="levelOfNeed" id="need">
          <option value="general">Choose Level Of Need</option>
          <option value="male">Low</option>
          <option value="female">Moderate</option>
          <option value="female">High</option>
        </select>
        <input type="number" placeholder="Years Left To Graduate" name="yearsLeftToGraduate" />
        <textarea
          required
          name="description"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea><br/>
        <div>
          <label htmlFor="title">Title: </label><br/>
          <input className='mx-4 my-3 text-black' type="text" id="title"  />
          <br />
          <label htmlFor="image">Image:</label><br/><br/>
          <input className='mx-2' type="file" id="image" accept="image/*" />
          <br />
        </div>
        <button type="submit">Add Child</button>
      </form>
    </div>
  );
};

export default AddProductPage;