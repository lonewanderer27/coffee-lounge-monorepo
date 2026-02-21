import ProductEdit from "@components/products/edit";
import { serverSupabaseClient } from "@utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ProductEditPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const client = await serverSupabaseClient();
  const { data } = await client.from("product").select().eq("id", id).single();

  if (!data) notFound();

  return (
    <ProductEdit product={data} />
  );
}
