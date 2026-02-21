import ProductShow from "@components/products/show";
import { serverSupabaseClient } from "@utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const client = await serverSupabaseClient();
  const { data: product } = await client.from("product").select().eq("id", id).single();
  const { data: category } = await client.from("category").select().eq("id", product?.category_type_id!).single();

  if (!product || !category) notFound();

  return (
    <ProductShow
      product={product}
      category={category}
    />
  );
}
