import ProductEdit from "@components/products/edit";
import { serverSupabaseClient } from "@utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ProductEditPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const client = await serverSupabaseClient();
  const { data: product } = await client.from("product").select().eq("id", id).single();
  const { data: categories } = await client.from("category").select();

  if (!product || !categories) notFound();

  return (
    <ProductEdit product={product} categories={categories} />
  );
}
