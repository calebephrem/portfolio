import Emoji from "@/components/ui/Emoji";

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex flex-col items-center justify-center gap-md">
      <u>
        <h1 className="text-7xl">404</h1>
      </u>

      <mark className="secondary">
        The page {"you're"} looking for has vanished into the afterlife{" "}
        <Emoji name="angel" size={24} />
      </mark>
    </div>
  );
}
