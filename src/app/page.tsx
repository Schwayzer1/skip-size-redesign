import SkipList from "@/components/SkipList";
import { getSkips } from "@/lib/api";

export default async function Home() {
  const skips = await getSkips();

  return <SkipList skips={skips} />;
}
