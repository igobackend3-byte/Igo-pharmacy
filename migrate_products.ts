import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./src/firebase/firebase";
import { PRODUCTS } from "./src/data/products";

const db = getFirestore(app);

async function migrateProducts() {
  console.log(`Starting migration of ${PRODUCTS.length} products...`);
  
  let successCount = 0;
  let errorCount = 0;

  for (const product of PRODUCTS) {
    try {
      // Use the existing ID or a generated one.
      const productId = product.id;
      const productRef = doc(db, "products", productId);
      
      await setDoc(productRef, product);
      console.log(`Successfully migrated: ${product.name} (${productId})`);
      successCount++;
    } catch (error) {
      console.error(`Failed to migrate: ${product.name}`, error);
      errorCount++;
    }
  }

  console.log(`Migration complete. Success: ${successCount}, Errors: ${errorCount}`);
  process.exit(0);
}

migrateProducts();
