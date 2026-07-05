import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ restaurant: string }>;
}) {
  const { restaurant } = await params;
  redirect(`/${restaurant}/menu/all`);
}
