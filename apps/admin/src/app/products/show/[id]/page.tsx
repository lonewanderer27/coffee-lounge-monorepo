import ProductShow from "@components/products/show";
import { serverSupabaseClient } from "@utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const client = await serverSupabaseClient();
  const { data } = await client.from("product").select().eq("id", id).single();

  if (!data) notFound();

  return (
    <ProductShow product={data} />
  );
}
