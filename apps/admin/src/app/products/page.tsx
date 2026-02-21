import ProductsList from "@components/products/list";
import { serverSupabaseClient } from "@utils/supabase/server";

export default async function ProductsListPage() {
  const client = await serverSupabaseClient();
  const { data: products } = await client.from("product").select().order("name", {
    ascending: true
  });
  const { data: categories } = await client.from("category").select();

  return (
    <ProductsList products={products!} categories={categories!} />
  );
}
